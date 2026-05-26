# TalentStage

TalentStage is a hackathon-ready implementation of DevFusion 2.0 Problem Statement 4: a creator and freelancer portfolio plus hiring marketplace.

## Features covered

- Single account role switch for Freelancer, Client, or Both
- Identity verification UI flow using LinkedIn URL or student ID upload
- Rich freelancer profile with bio, skills, hourly rate, availability, education, work experience, portfolio gallery, reviews, verified badges, and profile completeness
- Client project posting with required skills, budget range, deadline, and project type
- Proposal system with bid amount, timeline, cover message, AI proposal scoring, shortlist, message, and hire actions
- Smart Freelancer Match that ranks top freelancers by skills, portfolio quality, rating, and budget fit
- Portfolio Reviewer with improvement suggestions
- Skill Verifier with simulated MCQ/practical flow and verified badge outcome
- Project Scoping Assistant that turns vague requirements into deliverables, timeline, and budget range
- Active contracts with deliverable status updates, milestone approval, and client communication
- Sandbox milestone payments, 10% commission simulation, payout breakdown, withdrawal history concept, and Pro Freelancer subscription checkout
- Saved freelancers, public community feed, weekly skill challenge, mentorship matching, and review/rating surfaces

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- No build step and no external package install required

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## GitHub Pages

Because this is a static app, it can be deployed directly with GitHub Pages:

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to Pages.
4. Deploy from the `main` branch root.

## Notes

All AI and payment features are simulated in the browser for demo and judging purposes. No real payments are collected and no external AI API key is required.
