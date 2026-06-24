#!/usr/bin/env bash
set -euo pipefail

mkdir -p output

pandoc -s resume.md -o output/resume.pdf
pandoc -s employment-history.md -o output/employment-history.pdf
pandoc -s project-history.md -o output/project-history.pdf

pdftk output/resume.pdf output/employment-history.pdf output/project-history.pdf cat output output/resume-empl-proj-hist.pdf
pdftk output/resume.pdf output/employment-history.pdf cat output output/resume-empl-hist.pdf

{
  cat docs/prefix.html
  pandoc -f markdown-smart-citations -t html resume.md employment-history.md project-history.md
  cat docs/suffix.html
} > docs/index.html
