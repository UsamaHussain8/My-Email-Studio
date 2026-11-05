---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign for each lead group

Campaign folder: $ARGUMENTS

## Step 1: Check the campaign folder

- If no campaign folder was given above, do not write anything. Use Glob to find folders in `campaigns/` that have an `emails/` folder, and reply only with this list:

  No campaign folder given. Run `/personalize <campaign folder>` with one of these:
  - campaigns/<folder-name>
  - ...

  Then stop.
- If a folder was given but it has no `emails/*.md` files, say so, list the campaign folders as above, and stop.
- Accept the folder with or without the `campaigns/` part (for example `calm-friday-launch` or `campaigns/calm-friday-launch`).

## Step 2: Read what you need

1. Read every email in `<campaign folder>/emails/*.md`. Do not read or copy files from any existing `groups/` folder.
2. Read `leads/leads.csv` and find the distinct values in the `group` column (for example `past-buyer`, `past-seller`, `quiet-user`). Use these exact values as the group names and folder names. Do not invent groups that are not in the file.
3. Read `brand/voice.md` and `.claude/rules/emails.md`. Every version must follow both.
4. Use the CSV only to learn which groups exist. Never copy names, emails or other personal details into the emails.

## Step 3: Write one version per group

For each email and each group, write a version that changes only two things:

1. **The opening line**: the first sentence after `Dear {{first_name}},`. Rewrite it so it speaks to that group.
2. **One example**: pick one example, reason or bullet in the body and reword it so it fits that group. Change only one.

Ideas for each group:

- **past-buyer**: people who have bought a pre-loved gadget from us. Speak to finding their next gadget, or to saving on an upgrade.
- **past-seller**: people who have sold or swapped a gadget with us. Speak to earning credits on their next swap, or to the gadget sitting in their drawer.
- **quiet-user**: people who joined but have not bought or sold much. Welcome them back gently. No pressure and no guilt.
- Any other group: read its name and write a sensible, calm opening for it.

Keep everything else exactly the same:

- The `Subject:` and `Preview:` lines, word for word.
- The greeting `Dear {{first_name}},`.
- The structure: same sections, same order, same number of bullets.
- The one main link, with the same button text and the same address.
- All facts: dates, prices, credits, percentages and conditions. Never change or add an offer.
- The sign-off and the two-line footer, word for word, with nothing after the footer.

Brand checks for every new line:

- Calm, warm, friendly, plain English, short words.
- Use only words the brand allows. Call items pre-loved (or another brand word), never second-hand.
- No words from the "Words we avoid" list and no claims from the "Claims we must never make" list.
- No urgency or guilt, especially for quiet users.

## Step 4: Save the files

Save each version to `<campaign folder>/groups/<group>/emails/<same file name>`.

For example: `campaigns/calm-friday-launch/emails/01-your-spot-is-ready.md` becomes `campaigns/calm-friday-launch/groups/past-buyer/emails/01-your-spot-is-ready.md`.

Never change or delete the original emails. Never send any email.

## Step 5: Reply with a short summary only

Reply with this and nothing else:

Wrote <N> files (<emails> emails x <groups> groups) to <campaign folder>/groups/.

- <group>: "<one example opening line>"
- <group>: "<one example opening line>"
- ...
