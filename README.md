# PracticeIQ

A local-first Progressive Web App for golf practice, speed, putting, and scoring — part of the **GolfIQ suite**. One idea drives every screen: **pressure left, then swing.**

**Live app → [ifunner.github.io/practiceiq](https://ifunner.github.io/practiceiq/)**

---

## What it does

PracticeIQ turns practice into a plan you can actually follow. Log home routines, range sessions, speed work, putting blocks, and rounds — then watch the numbers that matter (fat shots per 70 balls, make rates, speed gains) move in the right direction.

The app ships with a full **30-day program**: daily (10–15 min) and extended (20–25 min) home routines, a 70-ball range structure, a Skillz speed protocol, a Wellputt 3/6/10-ft + lag program, pre-shot and pre-putt routines, the six swing red flags, weekly checkpoints, and a printable one-page journal. Headline metric: **fat shots per 70 balls** (target under 2).

No accounts, no servers. Everything stays on your device and works offline on the course.

## GolfIQ suite

PracticeIQ is the **practice side** of GolfIQ — what to work on once you know where you're leaking strokes.

- **[StrokesIQ](https://ifunner.github.io/strokesiq/)** — strokes gained round tracking; names your biggest leak and scoring potential.
- **[GreenIQ](https://ifunner.github.io/greeniq/)** — green reading and putting trainer; slope, aim, pace, and feel training.

## Install on your phone

1. Open **[ifunner.github.io/practiceiq](https://ifunner.github.io/practiceiq/)** in Safari (iOS) or Chrome (Android).
2. Share → **Add to Home Screen**.
3. Launch from the home-screen icon — it runs full-screen and offline.

PWA install and offline only work over **HTTPS** — opening `index.html` as a local file will not work.

## Back up your data

iOS can clear an unused web app's storage. **More → Export backup** saves a JSON file; **Import backup** restores it (also how you move data between two devices). Export after big range or round sessions — treat it like backing up a music library.

---

## For developers

Static single-file PWA — vanilla JavaScript, no framework, no build step.

| File / folder | Role |
|---|---|
| `index.html` | App shell, UI, logic, and golf content |
| `golfiq.css` | Vendored shared design system (sync from [`golfiq-design`](https://github.com/ifunner/golfiq-design)) |
| `manifest.json` | PWA manifest |
| `service-worker.js` | Offline app-shell cache |
| `practiceiq-logo/` | Marks, icons, favicons |

### Deploy (GitHub Pages)

1. Push to `main` with the repo root as the Pages source (or upload keeping folder structure — `practiceiq-logo/` must stay a subfolder).
2. Open the published `https://…` URL.

**Netlify:** drag the `practiceiq` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

Design tokens and cross-suite UI rules: [`golfiq-design`](https://github.com/ifunner/golfiq-design) · [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md).
