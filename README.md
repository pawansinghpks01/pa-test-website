# 🌐 pa-test-website

[![Deploy](https://img.shields.io/badge/Live_Site-View%20Now-2ea44f?style=for-the-badge)](https://pawansinghpks01.github.io/pa-test-website/)

A combined React app featuring a modern landing page and a JSON viewer section.  
Deployed using **GitHub Pages** 🚀

# Combined React App — Landing + JSON Viewer

This repository contains a single React app with:
- A responsive landing page (Home) at `/`
- A JSON Viewer page at `/viewer`
- Tailwind CSS for styling
- React Router for navigation
- GH Pages deploy support

## Setup (local)
1. Replace `homepage` in `package.json` with your GitHub Pages URL: `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>`
2. Install:

```bash
npm install
```

3. Run locally:

```bash
npm start
```

## Build & Deploy to GitHub Pages
1. Ensure repository has been pushed to GitHub.
2. Update `homepage` in `package.json` (see above).
3. Run:

```bash
npm run deploy
```

This uses `gh-pages` to push your `build/` to the `gh-pages` branch.

## 🚀 Deployment

This project is automatically deployed to **GitHub Pages** using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

To redeploy after making changes:
```bash
npm run deploy
```

## Notes
- Tailwind + PostCSS configured for `create-react-app` style setup.
- If you used a different starter, adapt scripts accordingly.
