# Ryan Fetterman Portfolio (Hugo)

Minimal Hugo site for a security researcher portfolio + research log, designed for deployment on GitHub Pages (`username.github.io`).

## Stack
- Hugo Extended (static site)
- Lightweight custom theme: `themes/rf-minimal`
- GitHub Actions deployment to GitHub Pages
- No analytics

## Local development
1. Install Hugo Extended (v0.128+ recommended).
2. Run:
   ```bash
   hugo server -D
   ```
3. Open [http://localhost:1313](http://localhost:1313).

## Build
```bash
hugo --minify
```

## Content structure
- Blog posts: `content/blog/*.md`
- Publications: `content/research/publications/<slug>/index.md`
- Talks/appearances: `content/research/talks/<slug>/index.md`
- Tools/datasets: `content/tools/<slug>/index.md`

## Add a blog post
Create `content/blog/my-post.md`:
```toml
+++
title = "My Post"
date = 2026-03-04
summary = "Short summary"
tags = ["tag-one", "tag-two"]
entryType = "blog"
+++
```

## Mermaid diagrams (local, no CDN)
- Mermaid support is wired through a local JS asset: `static/js/mermaid.min.js`
- Use fenced code blocks:
  ````markdown
  ```mermaid
  graph TD
    A[Start] --> B[End]
  ```
  ````

## Blog search
- Search UI: `/blog/search/`
- Uses local `static/js/fuse.min.js`
- Search index generated at `/blog/index.json`

## Resume PDF replacement
- Placeholder file: `static/resume/ryan-fetterman-resume.pdf`
- Replace it with your real resume PDF, keeping the same filename.

## Contact form (Formspree)
Set endpoint in `hugo.toml`:
```toml
[params]
formspreeEndpoint = "https://formspree.io/f/your-id"
```

## security.txt
Edit `static/.well-known/security.txt` with your contact and policy URLs.

## GitHub Pages deployment
Workflow file: `.github/workflows/deploy.yml`
- Triggers on pushes to `main`
- Builds with Hugo Extended
- Deploys using official GitHub Pages actions

## Custom domain (later)
1. Add `static/CNAME` containing your domain (for example `research.example.com`).
2. Configure DNS records with your domain provider.
3. Update `baseURL` in `hugo.toml`.

## Recommended security headers / CSP
GitHub Pages does not let you set custom response headers directly. Use Cloudflare, Netlify, or another reverse proxy/CDN in front of Pages if you want strict headers.

Suggested baseline:
- `Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; form-action https://formspree.io; base-uri 'self'; object-src 'none'; frame-ancestors 'none'`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
