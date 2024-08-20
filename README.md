#Resume Builder

view output here:

https://ubernaut.github.io/resume/

This is a markdown to pdf and html resume pipeline.

I use this to convert markdown files which contain my resume, employment history, and project history into both PDF and HTML formats for distribution.

## deps:
sudo apt install pandoc texlive-latex texlive-latex-extra pdftk markdown texlive-latex-base texlive-fonts-recommended texlive-fonts-extra texlive-latex-extra

## to use:

Use markdown to populate the resume.md employment-history.md and project-history.md files.

edit the HTML wrapper (prefix.html and suffix.html) and CSS in the docs folder to change the style/fonts
then run:

sh convert.sh

the pdf's are sent to output and the html is sent to the docs folder.

if you use github pages, set the docs folder to be its root.
