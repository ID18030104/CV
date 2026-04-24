#!/usr/bin/env bash
# Regenerate the 3 language PDFs (cv-fr.pdf, cv-en.pdf, cv-zh.pdf).
#
# Prerequisite: the dev server must already be running (npm run dev)
# and reachable at http://localhost:PORT (default 7777).
#
# Usage:
#   bash scripts/generate-pdfs.sh           # uses default port 7777
#   PORT=5173 bash scripts/generate-pdfs.sh # override port

set -euo pipefail

PORT="${PORT:-7777}"
URL="http://localhost:${PORT}"

# Locate Chrome across common install paths
CHROME=""
for candidate in \
  "/c/Program Files/Google/Chrome/Application/chrome.exe" \
  "/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" \
  "$(command -v google-chrome 2>/dev/null || true)" \
  "$(command -v chromium 2>/dev/null || true)" \
  "$(command -v chrome 2>/dev/null || true)"; do
  if [ -n "$candidate" ] && [ -x "$candidate" ]; then
    CHROME="$candidate"
    break
  fi
done

if [ -z "$CHROME" ]; then
  echo "ERROR: Chrome not found. Install Google Chrome or Chromium." >&2
  exit 1
fi

# Verify dev server is up
if ! curl -sf -o /dev/null "$URL"; then
  echo "ERROR: dev server is not responding at $URL" >&2
  echo "Run 'npm run dev' (or 'PORT=$PORT npm run dev') in another terminal." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PUBLIC_DIR="$(cd "$SCRIPT_DIR/.." && pwd)/public"
mkdir -p "$PUBLIC_DIR"

# Chrome on Windows needs a Windows-style absolute path for --print-to-pdf.
# Detect and convert if we're on a Windows shell (MINGW / MSYS / Cygwin / Git Bash).
to_os_path() {
  local p="$1"
  if command -v cygpath >/dev/null 2>&1; then
    cygpath -w "$p"
  else
    echo "$p"
  fi
}

for lang in fr en zh; do
  out="$PUBLIC_DIR/cv-${lang}.pdf"
  out_os="$(to_os_path "$out")"
  echo "Generating $out..."
  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --no-pdf-header-footer \
    --virtual-time-budget=8000 \
    --print-to-pdf="$out_os" \
    "${URL}/?lang=${lang}" 2>&1 | grep -v "PHONE_REGISTRATION_ERROR" || true
done

echo "Done. PDFs generated in $PUBLIC_DIR"
ls -lh "$PUBLIC_DIR"/cv-*.pdf
