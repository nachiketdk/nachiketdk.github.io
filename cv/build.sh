#!/bin/sh
set -eu
cd "$(dirname "$0")"
latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=build cv.tex
cp build/cv.pdf Nachiket_Kotalwar_CV.pdf
# Preserve links to the full-width preview previously shared during review.
cp build/cv.pdf Nachiket_Kotalwar_CV_FullWidth.pdf
