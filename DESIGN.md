# Design Doc — Ryan Fetterman Portfolio + Research Blog (Hugo + GitHub Pages)

## 1. Overview
Build a personal portfolio and research log website for **Ryan Fetterman**, an **Applied AI Security Researcher**, using **Hugo** and deploying to **GitHub Pages** via **GitHub Actions**.

The site should feel **minimalist but colorful and playful**, with a **cyan accent**, **modern sans body typography**, and **monospace headings**.

The homepage should primarily function as a **chronological log of recent work**, highlighting:
- blog posts
- YouTube appearances
- conference talks
- research publications

Secondary goals include showcasing selected work/projects, providing access to datasets/tools, and making it easy for researchers and recruiters to find Ryan’s work and contact him.

### Constraints
Employer names must not appear anywhere on the site outside resume context.

Allowed employers (resume only): Splunk, Cisco, MITRE, Booz Allen Hamilton.

## 2. Navigation
Top nav:
- Research
- Blog
- Datasets / Tools
- Resume (PDF)
- Contact

Footer:
- GitHub
- Hugging Face
- LinkedIn
- RSS
- Privacy
- security.txt

## 3. Homepage
Sections:
1) Hero with CTA buttons ("See Recent Work" anchor, "Download Resume")
2) Unified Recent Work Feed (blog + talks/videos + publications)
3) Featured Projects (4 cards)
4) Social links row
5) Contact teaser

Featured projects:
- Applied Interpretability — https://www.linkedin.com/pulse/applied-interpretability-foundation-sec-instruct-goes-under-microscope-4nutc
- LUCID — https://www.linkedin.com/pulse/from-rules-reasoning-unleashing-llms-detection-logic-fdtn-ytxfc/
- Defending at Machine Speed — https://www.splunk.com/en_us/blog/security/guiding-llms-with-security-context.html
- Toward Quantitative Modeling of Cybersecurity Risks due to AI Misuse — https://arxiv.org/abs/2512.08864

## 4. Sections
### Research
Publications + Talks & Appearances (flat).

### Blog
Occasional posts.
- code highlighting: yes
- KaTeX: no
- Mermaid: yes
- reading time: yes
- RSS: yes
- search: yes (local)
- comments: none

### Datasets / Tools
Flat list of artifacts with links/license/citation.

### Resume
PDF link only.

### Contact
Formspree form.

### Policy pages
- /privacy
- /.well-known/security.txt

## 5. Visual Design
- auto light/dark + toggle
- accent color: cyan
- body: modern sans
- headings: monospace (or monospace accents)
- minimalist but colorful/playful
- inspiration: https://cnewton.org/

## 6. Social Links
- LinkedIn: https://www.linkedin.com/in/ryan-fetterman/
- GitHub: https://github.com/fetterm4n
- Hugging Face: https://huggingface.co/dr-ry
- Google Scholar: placeholder for later

## 7. Hosting
- Repo: username.github.io
- Deploy: GitHub Actions -> GitHub Pages
- Custom domain: later
- No analytics