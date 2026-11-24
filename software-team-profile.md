# Software Team project profile: Amathuba

Profile version: 1 · Accepted by Onele Nongindzi on [Query Q-01] · Owner: Onele Nongindzi

## 1 Project and deciders
| Field | Value |
|---|---|
| Project name | Amathuba: Opportunity Starts Here |
| One-line purpose | Free employment support for South African job seekers: CVs, opportunities, applications, Z83, interviews and scam protection. |
| Business owner (final decider) | Onele Nongindzi |
| Product decider (accepts backlog and releases) | Onele Nongindzi |
| Technical decider (architecture and code standards) | Onele Nongindzi |
| Security decider (accepts risk) | Onele Nongindzi |
| Code reviewer(s) | Onele Nongindzi |
| Other stakeholders and what they decide | Onele Foundation (posts opportunities; future sponsor decisions) |

## 2 Users and business context
- Who uses it, and for what: unemployed South Africans, from first-time job seekers with no experience to experienced professionals, mostly on phones with limited data.
- Business goals: see `ABOUT.md` (mission, vision, core principle: essential job-seeker services stay free).
- Release plan: v1.0 public launch after this test cycle.
- Out of scope: paid services for job seekers; storing job seekers' data on a server; ads that track users.
- Known constraints: free hosting; no backend; must work offline after first visit and on older phones.

## 3 Technology stack
| Layer | Choice | Version |
|---|---|---|
| Front end | Single-page HTML, CSS and vanilla JavaScript (`index.html`) | — |
| Back end | None (static site) | — |
| Data | Browser localStorage on the user's device; `data/local-opportunities.json` in the repo | — |
| Hosting | GitHub Pages | — |
| Offline | Service worker (`sw.js`) | see `VERSION` |
| Libraries (vendored) | jsPDF, pdf.js (legacy build), mammoth, pdf-lib, qrcode-generator | 2.5.1, 3.11.174, 1.6.0, 1.17.1, 1.4.4 |
| Third-party services | GoatCounter (anonymous visit counts, no cookies) | hosted |

## 4 Repositories and environments
| Item | Value |
|---|---|
| Repository | `Onele-Nongindzi/amathuba` |
| Branching model | Currently direct to `main` (see Q-02) |
| Environments and URLs | Local: `python3 -m http.server 8000` → http://localhost:8000 · Production: https://onele-nongindzi.github.io/amathuba/ |
| Who may deploy where | Onele Nongindzi (a push to `main` deploys to Production) |
| CI/CD | GitHub Pages build from `main` |
| Test contact (non-production messages) | Not applicable: the app sends no messages itself (WhatsApp sharing is done by the user) |

## 5 Engineering standards
- Plain language in all user-facing text; South African English; typographic quotes and apostrophes.
- Every change bumps `VERSION` in `sw.js`.
- Charter check (`ABOUT.md`) before any feature: free, first-job friendly, low data, private.
- Definition of Done: feature works on a phone-sized screen in light and dark mode, offline after first load, no console errors, test cycle row passes.
- Secrets: none exist; never add any.

## 6 Non-functional requirements
| Area | Target |
|---|---|
| Availability | GitHub Pages availability |
| Performance | First load usable on 3G; heavy libraries load only when needed |
| Accessibility | Aim for WCAG 2.2 AA |
| Backup and recovery | Git history on GitHub; user data lives on users' devices only |
| Browsers and devices | Android Chrome and iPhone Safari, including older phones |

## 7 Security, privacy and compliance
- Data classes handled: CV content, contact details, ID number and signature (Z83), all stored only on the user's device.
- Laws and standards: POPIA.
- Information Officer: Onele Nongindzi (Onele Foundation, once registered).
- Penny Tration's sign-off required for: anything that sends user data off the device, new third-party scripts, the Z83 and CV import features.

## 8 Tools and where outputs go
| Purpose | Location |
|---|---|
| Backlog and change queue | `docs/change-queue.md` |
| Charter | `ABOUT.md` |
| Session logs | `docs/sessions/` |
| Test runs and reports | `docs/testing/` |
| Security reviews | `docs/security/` |
| Release notes | `docs/releases/` |
