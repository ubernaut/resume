#!/bin/#!/usr/bin/env bash

#dependencies:

#sudo apt install pandoc texlive-latex texlive-latex-extra pdftk markdown texlive-latex-base texlive-fonts-recommended texlive-fonts-extra texlive-latex-extra

pandoc -s resume.md -o resume.pdf;
pandoc -s employment-history.md -o employment-history.pdf;
pandoc -s project-history.md -o project-history.pdf;
pdftk resume.pdf employment-history.pdf project-history.pdf cat output resume-empl-proj-hist.pdf
pdftk resume.pdf employment-history.pdf cat output resume-empl-hist.pdf

cat docs/prefix.html >index.html;
markdown resume.md>>index.html;
markdown employment-history.md>>index.html;
markdown project-history.md>>index.html;

grep -vwE "(<p>fontfamily: bookman</p>)" index.html > outdex.html;
grep -vwE "(<h2>geometry: margin=1cm</h2>)" outdex.html > index.html;

rm outdex.html;

echo '</div></body></html>'>>index.html;

mv index.html docs;
mv *.pdf output;