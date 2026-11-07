# CV

Finalized on November 7, 2026. The full-width design is now canonical.

- Edit `cv.tex` only.
- Final PDF: `Nachiket_Kotalwar_CV.pdf`.
- `Nachiket_Kotalwar_CV_FullWidth.pdf` is an identical compatibility copy for links shared during design review; do not maintain it independently.
- `archive/` locally preserves the original supplied PDF, the earlier ModernCV design and its dependencies, and the full-width draft before finalization. These historical references are ignored by Git; the current source and final PDFs are versioned.
- `build/` contains ignored, disposable LaTeX intermediates.

## Build

Requires TeX Live with `pdflatex` and `latexmk`. From the repository root:

```sh
./cv/build.sh
```

Render both pages and inspect them after edits. Check publication order, author order, equal-contribution markers, hyperlink destinations, and layout. The current design uses 11-point text on two A4 pages, with a deliberate page break before the 2025 publications and no repeated section heading.

## Approved content and design

- The two research themes are Human-AI interaction and Agent capabilities and reliability. They overlap; system development, training, and evaluation are activities across both themes. The general goal is to enable effective human-AI collaboration.
- Keep the general research directions and goal separate from examples of applications. The Research Interests paragraph reflecting the approved themes is: "I study human-AI interaction and the capabilities and reliability of AI agents. My goal is to enable effective human-AI collaboration. Applications of my work include AI-assisted software engineering and STEM education." The shorter opening avoids leaving a single word on the last line.
- Application examples are non-exhaustive: AI-assisted software engineering and STEM education. Scientific research is an ongoing direction and is omitted from the current CV and website. The website puts the research focus and collaboration goal in the introduction, then presents application examples separately after the research directions and paper links.
- The CMU experience description is conceptual: learning, personalization, and coordination for effective human-AI collaboration.
- Preprints precede Publications. The first-authored tutoring preprint leads; remaining preprints follow by recency.
- Publications are grouped by descending year, with full conference papers before workshop papers within each year.
- Preserve paper author order and mark equal contributions. Workshop and special-track labels remain explicit in the CV and full website bibliography. The user explicitly prefers the compact label "NeurIPS 2024" for Hints-In-Browser on the homepage.
- Homepage workshop labels are "ICML 2026 Workshop" and "COLM 2026 Workshop". The CV and full bibliography use "ICML 2026 Workshop on Human-AI Co-Creativity" and "COLM 2026 Workshop on Agent Behavior (WAB)". Keep conference/year punctuation consistent.
- Paper titles are clickable dark blue without underlines or separate paper-link labels. Preprints display arXiv IDs and years.
- Contact links include email, website, Google Scholar, GitHub, and LinkedIn.
- Use `nkotalwa@cs.cmu.edu` as the single contact email across the CV and website.
- GPA notation is approved as written, including 4.06/4.
- Teaching includes Foundations of Computational Data Science, CMU, Teaching Assistant, 2026.
- Program committee service includes CHI 2027.
- The Amazon entry uses the Trusted Software Agents challenge name, co-leadership of Carnegie Mellon University's team, selection among 10 university teams worldwide, and a $250K research grant. Omit the team name and AWS credits.

## Review and release

The user requires exact proposed CV changes to be discussed and approved before they are applied. Keep this finalized version as the baseline. Updating the website, uploading to Google Drive, or publishing requires the corresponding user-approved next step; the November 7 finalization did not upload or publish the CV.

The website and CV are maintained in this repository. Website work should use local files and local previews, following the user's standing preference; do not use OpenAI Sites or publish by default.

## GitHub Pages deployment

GitHub Pages publishes the repository root from `master` at https://nachiketdk.github.io/. The website links directly to `cv/Nachiket_Kotalwar_CV.pdf`, so approved CV releases can be published together with website changes. Include `cv.tex`, both generated PDF copies, and any approved website changes in the release commit. Push to `origin/master` only when publication is authorized, then verify the Pages deployment and public PDF.
