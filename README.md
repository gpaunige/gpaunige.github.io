# GAP Analytics Consulting — Website

Built with [Franklin.jl](https://franklinjl.org) and deployed to GitHub Pages.

## Local development

```bash
# Install Julia (https://julialang.org/downloads/)
# Then in this directory:
julia --project -e 'using Pkg; Pkg.instantiate()'
julia --project -e 'using Franklin; serve()'
# Open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages** and set source to `gh-pages` branch
3. The GitHub Action (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `main`

## Structure

```
gap-site/
├── index.md            ← Homepage content (Hero, About, Services, Contact)
├── config.md           ← Franklin site settings
├── Project.toml        ← Julia dependencies
├── _layout/
│   └── default.html    ← Base HTML layout (nav + footer)
├── _css/
│   └── gap.css         ← All styles
├── assets/
│   └── js/main.js      ← Scroll reveal, mobile nav, form handler
└── .github/
    └── workflows/
        └── deploy.yml  ← CI/CD pipeline
```

## Customisation

- Edit `index.md` to update all page content
- Update colours and fonts in `_css/gap.css` (CSS variables at top of file)
- Change site URL and title in `config.md`
- The contact form uses a demo handler — connect to Netlify Forms, Formspree, or your own backend by updating the `<form>` action in `index.md`
