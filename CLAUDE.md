# CLAUDE.md

Claude reads this file at the start of every session in this repo. Keep it short and current.

## Project
- Profile: `software-team-profile.md`. Charter: `ABOUT.md`. Read both first.
- Latest session log: `docs/sessions/` (newest file). Change queue: `docs/change-queue.md`.

## Run it
```sh
python3 -m http.server 8000   # then open http://localhost:8000
```
Visitor counting is off on localhost by design.

## How we work with Claude
- Use the Software Team plugin. Humans decide at every gate; Onele Nongindzi is the decider for product, technical and security.
- Check every feature against the charter in `ABOUT.md`.
- Test with the test-cycle skill, security review with the security-review skill, release notes in `docs/releases/`.
- End each session with a log in `docs/sessions/<yyyy-mm-dd>.md`.

## Hard rules
- Bump `VERSION` in `sw.js` with every change, or phones keep the old version.
- Job seekers' personal data never leaves their device. No new third-party script without a security review.
- Never post an opportunity that asks applicants for money; only post verified opportunities.
- No real people's details in test files, screenshots or commits (POPIA). Use made-up people.
- Essential job-seeker services stay free.
