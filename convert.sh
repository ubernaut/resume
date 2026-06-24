#!/usr/bin/env bash
set -euo pipefail

mkdir -p output

find_chrome() {
  if [[ -n "${CHROME_BIN:-}" ]]; then
    printf '%s\n' "$CHROME_BIN"
    return
  fi

  command -v google-chrome || command -v chromium || command -v chromium-browser || true
}

chrome_bin="$(find_chrome)"
if [[ -z "$chrome_bin" ]]; then
  echo "google-chrome, chromium, or chromium-browser is required to build PDFs" >&2
  exit 1
fi

pdf_tmpdir="$(mktemp -d "$PWD/.pdf-build.XXXXXX")"
trap 'rm -rf "$pdf_tmpdir"' EXIT

build_pdf() {
  local input_file="$1"
  local output_file="$2"
  local title="$3"
  local html_file="$pdf_tmpdir/${input_file%.md}.html"
  local chrome_log="$pdf_tmpdir/${input_file%.md}.chrome.log"

  pandoc -s -f markdown-smart-citations -t html5 \
    --metadata pagetitle="$title" \
    --include-in-header=docs/pdf-head.html \
    "$input_file" \
    -o "$html_file"

  if ! "$chrome_bin" \
    --headless=new \
    --no-sandbox \
    --disable-gpu \
    --no-pdf-header-footer \
    --print-to-pdf="$PWD/$output_file" \
    "file://$html_file" >"$chrome_log" 2>&1; then
    cat "$chrome_log" >&2
    return 1
  fi
}

build_pdf resume.md output/resume.pdf "Resume"
build_pdf employment-history.md output/employment-history.pdf "Employment History"
build_pdf project-history.md output/project-history.pdf "Project History"

pdftk output/resume.pdf output/employment-history.pdf output/project-history.pdf cat output output/resume-empl-proj-hist.pdf
pdftk output/resume.pdf output/employment-history.pdf cat output output/resume-empl-hist.pdf

{
  cat docs/prefix.html
  pandoc -f markdown-smart-citations -t html resume.md employment-history.md project-history.md
  cat docs/suffix.html
} > docs/index.html
