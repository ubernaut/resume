#!/bin/#!/usr/bin/env bash
pandoc -s cschroeder-resume.md -o cschroeder-resume.pdf;
pandoc -s cschroeder-project-history.md -o cschroeder-project-history.pdf;
pdftk cschroeder-resume.pdf cschroeder-project-history.pdf cat output cschroeder-resume-proj-hist.pdf
