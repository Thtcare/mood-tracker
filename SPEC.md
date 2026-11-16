# Mood Tracker — Specification

## Goal
A small personal web app for recording mood check-ins quickly and reviewing them in a simple list. It is for one person and keeps its data in this browser only.

## Check-in
- Choose one labeled mood: **Bad**, **Bored**, **So-so**, **Happy**, or **Very happy**. “Bored” interprets the answer “bore”; confirm or rename it during implementation if needed.
- Optionally add a short note.
- Save the date and time automatically when the check-in is created.
- Allow multiple check-ins on the same day.

## History and corrections
- Show saved check-ins in a simple list, newest first.
- Each entry shows its mood, date/time, and note when present.
- Allow the user to edit or delete an entry.
- Ask for confirmation before deleting an entry.

## Storage and scope
- Use plain web pages (HTML, CSS, and JavaScript) with no account or server requirement.
- Save entries in this browser on this device, using browser-local storage (for example, `localStorage`).
- Do not send entries to a server or third party.
- Entries are not automatically shared or synchronized to other browsers/devices. Clearing this browser’s site data may erase them.

## Design direction
- Use **03 · The mood garden** from `designs.html` as the chosen visual direction.
- Keep its playful, expressive look, with friendly mood tiles and a simple recent check-in list.
- The mockup is a visual reference; implement actual app behavior separately when requested.

## Interaction priorities
- Make adding a check-in fast: mood choices are immediately visible, the note is optional, and saving requires minimal steps.
- Work on a phone-sized screen as well as desktop.
- Keep the interface focused on recording and reviewing personal entries; no diagnosis or interpretation of mood trends is in scope.

## Not in scope
Accounts, cloud sync, sharing, reminders, charts, analytics, and clinical advice.
