# Amathuba Careers: CV Builder & Opportunities

A free CV builder and opportunity finder by Onele Foundation. No sign-up, no subscription, works on phones and offline after the first visit. All personal information stays on the user's own device (nothing is sent to a server), which keeps the project simple under POPIA.

## What's in the folder

| File | What it does |
| --- | --- |
| `index.html` | The whole app (form, ATS CV check, PDF/text download, opportunity finder) |
| `js/opportunities.js` | The list of opportunities and job titles. Edit this to update links without touching the app |
| `vendor/jspdf.umd.min.js` | PDF generator (MIT license), stored locally so the app works offline |
| `sw.js` | Offline support. Change `VERSION` every time you update a file |
| `manifest.webmanifest`, `icons/` | Lets people "Add to Home screen" like an app |

## Test it on your computer

From this folder run `python3 -m http.server 8000` (or `npx serve`) and open http://localhost:8000. Opening `index.html` directly works too, but offline mode only works when served.

## Deploy (free)

**Option A: Netlify Drop (easiest, no Git).** Go to https://app.netlify.com/drop, sign up for a free account, and drag this whole folder onto the page. You get a link like `amathuba.netlify.app`. To update, drag the new folder onto your site's Deploys page.

**Option B: GitHub Pages.** Create a repository (e.g. `amathuba`), upload all files keeping the folders, then go to Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. The site appears at `https://<your-username>.github.io/amathuba/`. Note: free GitHub Pages needs a public repository, so the code is visible to anyone (your copyright still applies).

**Option C: Cloudflare Pages.** Connect a GitHub repository (private is fine) at https://pages.cloudflare.com. No build command; output directory `/`.

## Your own domain (optional)

Register a `.co.za` domain (e.g. `amathuba.co.za`) with any South African registrar, then add it under your host's custom domain settings. All three hosts above provide free HTTPS.

## Updating opportunities

1. Edit `js/opportunities.js` (copy an existing entry and change it).
2. In `sw.js`, change `VERSION` (e.g. `amathuba-v2`).
3. Re-deploy. Phones get the update the next time they open the app with data.

Check every link at least once a quarter; programmes and websites change often.

Copyright (c) 2026 Onele Nongindzi. All rights reserved. See COPYRIGHT.txt.

## Posting opportunities (Lusikisiki and across South Africa)

Opportunities posted by Onele Foundation live in `data/local-opportunities.json` and show at the top of the "Where to apply" tab, where job seekers can filter by province. Closed ones hide automatically.

1. Open `admin.html` on the live site (for example `https://<your-site>/admin.html`).
2. Fill in the form, click **Add to the list**, then **Copy the updated list**.
3. Click the GitHub link on that page, replace the file's contents with what you copied, and click **Commit changes**.

Only post opportunities you have verified. Never post anything that asks applicants for money.

## Official Z83

`forms/z83-blank.pdf` is the official Z83 (effective 01 January 2021). The Z83 helper writes the user's answers onto it on the device and can join the CV after it as one PDF. If DPSA publishes a new version of the form, the positions in `fillOfficialZ83()` in `index.html` must be checked again.
