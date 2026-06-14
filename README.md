# PracticeIQ

A local-first Progressive Web App for golf practice, speed, putting, and scoring — part of the GolfIQ suite. One idea drives every screen: **pressure left, then swing.**

## What's inside
- `index.html` — the whole app (UI, logic, all golf content)
- `manifest.json` — PWA manifest
- `service-worker.js` — offline app-shell cache
- `practiceiq-logo/` — marks, icons, favicons, lockups
- `README.md` — this file

Data is stored on-device with IndexedDB. No accounts, no servers, works offline on the course.

## Deploy (required for install + offline)
PWA install and offline only work over **HTTPS** — opening `index.html` as a local file will not work. Put the whole folder on a free static host:

**GitHub Pages**
1. Create a repo, upload every file *keeping the folder structure* (`practiceiq-logo/` stays a subfolder).
2. Settings → Pages → deploy from the `main` branch, root.
3. Open the published `https://…` URL.

**Netlify** (no account-side build needed)
1. Drag the `practiceiq` folder onto app.netlify.com/drop.
2. Open the `https://…` URL it gives you.

## Install on iPhone
1. Open the deployed HTTPS URL in **Safari**.
2. Tap Share → **Add to Home Screen**.
3. Launch from the home-screen icon — it runs full-screen and offline.

## Back up your data
iOS can clear an unused web app's storage. **More → Export backup** saves a JSON file; **Import backup** restores it (also how you move data between two devices). Export after big range or round sessions — treat it like backing up a music library.

## The plan
The app ships with a full 30-day program, a daily (10–15 min) and extended (20–25 min) home routine, a 70-ball range structure, a Skillz speed protocol, a Wellputt 3/6/10-ft + lag program, pre-shot and pre-putt routines, the six swing red flags, weekly checkpoints, and a printable one-page journal. Headline metric: **fat shots per 70 balls** (target under 2).
