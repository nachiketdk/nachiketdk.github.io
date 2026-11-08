# CV

Finalized on November 7, 2026. The three-page monochrome design inspired by Daniel Fried's CV is now canonical.

- Edit `cv.tex` only.
- Final PDF: `Nachiket_Kotalwar_CV.pdf`.
- `Nachiket_Kotalwar_CV_FullWidth.pdf` is an identical compatibility copy for links shared during design review; do not maintain it independently.
- `archive/` locally preserves the original supplied PDF, the earlier ModernCV design and its dependencies, earlier full-width drafts, and the previous published two-page CV. These historical references are ignored by Git; the current source and final PDFs are versioned.
- `build/` contains ignored, disposable LaTeX intermediates.

## Build

Requires TeX Live with `pdflatex` and `latexmk`. From the repository root:

```sh
./cv/build.sh
```

Render all three pages and inspect them after edits. Check publication order, author order, equal-contribution markers, layout, and the absence of clickable link annotations. The current design uses 12-point TeX Gyre Pagella text on three A4 pages, with 11-point section labels in a narrow left margin, generous spacing, and grayscale text. Hyperref's `draft` option intentionally disables embedded links; its draft-mode warning is expected. Paper URLs remain in the LaTeX source as reference data but are not rendered as links.

The page arrangement is deliberate: page 1 contains contact information, education, research interests, experience, and awards; page 2 contains all preprints and publications; page 3 contains projects, teaching, research mentoring, academic service, and skills.

## Approved content and design

- The two research themes are Human-AI interaction and Agent capabilities and reliability. They overlap; system development, training, and evaluation are activities across both themes. The general goal is to enable effective human-AI collaboration.
- Keep the general research directions and goal separate from examples of applications. The Research Interests paragraph reflecting the approved themes is: "I study human-AI interaction and the capabilities and reliability of AI agents. My goal is to enable effective human-AI collaboration. Applications of my work include AI-assisted software engineering and STEM education."
- Application examples are non-exhaustive: AI-assisted software engineering and STEM education. Scientific research is an ongoing direction and is omitted from the current CV and website. The website puts the research focus and collaboration goal in the introduction, then presents application examples separately after the research directions and paper links.
- The CMU experience description is conceptual: learning, personalization, and coordination for effective human-AI collaboration.
- Experience entries use a bold role, an italic institution name, and a 3-point gap before the regular-text description. Keep the existing text size and monochrome style.
- Preprints precede Publications. The first-authored tutoring preprint leads; remaining preprints follow by recency.
- Publications are grouped by descending year, with full conference papers before workshop papers within each year.
- Preserve paper author order and mark equal contributions. Workshop and special-track labels remain explicit in the CV and full website bibliography. The user explicitly prefers the compact label "NeurIPS 2024" for Hints-In-Browser on the homepage.
- Homepage workshop labels are "ICML 2026 Workshop" and "COLM 2026 Workshop". The CV and full bibliography use "ICML 2026 Workshop on Human-AI Co-Creativity" and "COLM 2026 Workshop on Agent Behavior (WAB)". Keep conference/year punctuation consistent.
- Paper titles are bold black text. The PDF has no clickable links, colored text, underlines, or separate Demo/Code/Platform link labels. Preprints display arXiv IDs and years.
- Contact information is exactly two plain-text lines: `nkotalwa@cs.cmu.edu`, then `nachiketdk.github.io`. Google Scholar, GitHub, and LinkedIn remain on the website and are omitted from the CV.
- Use `nkotalwa@cs.cmu.edu` as the single contact email across the CV and website.
- GPA notation is approved as written, including 4.06/4.
- Teaching includes Foundations of Computational Data Science, CMU, Teaching Assistant, 2026.
- Program committee service includes CHI 2027.
- Research Mentoring lists Partha Sarathi Purkayastha, ETH Zürich, and Rohini Das, Carnegie Mellon University. Dates and degree levels have not been supplied; do not infer them.
- The Amazon entry uses the Trusted Software Agents challenge name, co-leadership of Carnegie Mellon University's team, selection among 10 university teams worldwide, and a $250,000 research grant. Omit the team name and AWS credits.
- Write monetary amounts in full with comma separators: $250,000 for the research grant and $24,000 for the BITS Merit Scholarship. Do not abbreviate amounts with K.

## Review and release

The user requires exact proposed CV changes to be discussed and approved before they are applied. Keep this finalized version as the baseline. The user approved publishing this three-page version to GitHub Pages on November 7, 2026. Future website updates, Google Drive uploads, and publications require the corresponding user-approved next step.

The website and CV are maintained in this repository. Website work should use local files and local previews, following the user's standing preference; do not use OpenAI Sites or publish by default.

## GitHub Pages deployment

GitHub Pages publishes the repository root from `master` at https://nachiketdk.github.io/. The website links directly to `cv/Nachiket_Kotalwar_CV.pdf`, so approved CV releases can be published together with website changes. Include `cv.tex`, both generated PDF copies, and any approved website changes in the release commit. Push to `origin/master` only when publication is authorized, then verify the Pages deployment and public PDF.
