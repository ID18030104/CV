import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Loader2, User, Bot, Mic, Volume2, VolumeX } from 'lucide-react';
import {
  PROFILE_TEXT,
  EXPERIENCES,
  EDUCATION,
  SKILLS,
  PROJECTS,
  CONTACT,
  ENGAGEMENTS,
  INTERESTS,
  LANGUAGES
} from '../constants';

// Construct the context string from the CV constants
const CV_CONTEXT = JSON.stringify({
  profil: PROFILE_TEXT,
  experiences: EXPERIENCES,
  education: EDUCATION,
  skills: SKILLS,
  projets: PROJECTS,
  contact: CONTACT,
  engagements: ENGAGEMENTS,
  interets: INTERESTS,
  langues: LANGUAGES
});

const SYSTEM_INSTRUCTION = `
Tu es Isaac Derhy, un étudiant en Administration Systèmes, Sécurité & Réseaux et passionné d'IA.
Ceci est ton CV interactif. Tu discutes avec un recruteur ou un visiteur de ton site.

TON OBJECTIF :
Répondre aux questions sur ton parcours, tes compétences et tes projets de manière professionnelle, enthousiaste et précise, en te basant STRICTEMENT sur le contexte JSON fourni ci-dessous.

RÈGLES DE PERSONNALITÉ :
1. Parle en français, (en anglais lorsque l'interlocuteur le demande) à la première personne ("Je", "Mon parcours").
2. Sois concis mais informatif. (Idéal pour la synthèse vocale : ne fais pas de réponses trop longues sauf si nécessaire).
3. Mets en avant ta double compétence technique (IA/Dev/Sysadmin) et Business.
4. Si on te demande une info qui n'est pas dans le CV, dis poliment que tu ne l'as pas précisé ici mais que tu serais ravi d'en discuter de vive voix (propose ton email ou LinkedIn).
5. Ton ton est courtois, dynamique et "tech-savvy"
6. Fais des phrases courtes, ne rédige pas trop de texte, ça doit etre un rendu un peu sms. N'utilise pas l'étoile * car l'affichage n'est pas bon. 

CONTEXTE DU CV :
${CV_CONTEXT}
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

// Browser Speech Recognition Types
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bonjour ! Je suis l'IA d'Isaac. Posez-moi toutes vos questions sur son parcours ou ses compétences, par écrit ou par la voix !" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice State
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const recognitionRef = useRef<any>(null);

  // Use refs to access latest state in callbacks
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Gemini
  useEffect(() => {
    if (import.meta.env.VITE_GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
        const chat = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        chatSessionRef.current = chat;
      } catch (error) {
        console.error("Error initializing Gemini:", error);
      }
    }
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'fr-FR';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput(transcript);
          // Trigger send directly using the ref
          handleSend(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const speakText = (text: string) => {
    if (!voiceEnabled || !window.speechSynthesis) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    // Remove markdown symbols for cleaner speech
    const cleanText = text.replace(/\*\*/g, '').replace(/[\#\-\*]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'fr-FR';
    utterance.rate = 1.1; // Slightly faster
    utterance.pitch = 1;

    // Load voices if needed (Chrome quirk)
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find(v => v.lang.startsWith('fr'));
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Error starting recognition:", e);
      }
    }
  };

  const handleSend = async (manualText?: string) => {
    const textToSend = manualText || input;
    if (!textToSend.trim() || !chatSessionRef.current) return;

    // Stop speaking if user interrupts
    window.speechSynthesis.cancel();

    if (!manualText) setInput(''); // Clear input if not manual

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const result: GenerateContentResponse = await chatSessionRef.current.sendMessage({ message: textToSend });
      const responseText = result.text || "Désolé, je n'ai pas pu générer de réponse pour le moment.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      speakText(responseText);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oups, j'ai eu un petit problème de connexion. Réessayez ?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 no-print group">
        <span className={`bg-white text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md border border-slate-100 transition-all duration-300 origin-right ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 group-hover:-translate-x-2'}`}>
          Parler à l'IA d'Isaac
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center 
            ${isOpen ? 'bg-slate-700 text-white rotate-90' : 'bg-gradient-to-r from-primary-600 to-accent-500 text-white animate-bounce-subtle'}
          `}
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden no-print
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        `}
        style={{ height: '550px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 border border-slate-200 flex items-center justify-center ${isSpeaking ? 'animate-pulse' : ''}`}>
              <Bot size={20} className="text-primary-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Isaac Derhy (AI)</h3>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                Posez-lui toutes les questions
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setVoiceEnabled(!voiceEnabled);
              window.speechSynthesis.cancel();
            }}
            className={`p-2 rounded-full transition-colors ${voiceEnabled ? 'text-accent-500 hover:bg-slate-200' : 'text-slate-400 hover:bg-slate-200'}`}
            title={voiceEnabled ? "Désactiver la voix" : "Activer la voix"}
          >
            {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                  <Bot size={14} className="text-accent-500" />
                </div>
              )}

              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'}
                `}
              >
                {msg.text}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-1">
                  <User size={14} className="text-primary-600" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <Loader2 size={14} className="text-accent-500 animate-spin" />
              </div>
              <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={isListening ? "Écoute en cours..." : "Posez une question..."}
                className={`w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-400 transition-all placeholder:text-slate-400 ${isListening ? 'border-accent-400 ring-1 ring-accent-400 bg-red-50' : ''}`}
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 top-1.5 p-2 bg-accent-500 text-white rounded-full hover:bg-accent-600 disabled:opacity-50 disabled:hover:bg-accent-500 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Mic Button */}
            {recognitionRef.current && (
              <button
                onClick={toggleListening}
                className={`p-3 rounded-full transition-all duration-300 ${isListening
                    ? 'bg-red-500 text-white animate-pulse scale-110'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800'
                  }`}
                title="Parler à l'IA"
              >
                <Mic size={20} />
              </button>
            )}
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
            {recognitionRef.current ? "Microphone disponible" : "Microphone non supporté"} • Généré par IA
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;