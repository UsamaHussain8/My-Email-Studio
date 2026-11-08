# My Email Studio

A small studio for planning and writing email campaigns for **EasyBuy**, built to be used with [Claude Code](https://claude.com/claude-code).

Everything here is planning and drafting. No email in this repo is ever sent to real people. All the leads and customer reviews are made-up practice data.

---

## What this repo is about

This repo holds everything needed to plan, write, check and personalise an email campaign:

- the brand's voice rules, so every email sounds the same,
- a practice lead list split into groups,
- a full campaign plan and the email drafts,
- tools that check drafts against the brand rules,
- a safety guard that stops email from reaching real people.

Claude Code reads the rules in this repo (`CLAUDE.md`, `brand/voice.md`, `.claude/rules/`) on its own, so it follows them while drafting.

## The brand: EasyBuy

EasyBuy is an online store where people **buy and sell pre-loved electronic items and gadgets**, and nothing else. An item is accepted only when it is of decent to good quality.

The voice is **calm, warm and friendly**: simple English, a bit casual, like a helpful person talking to one customer. Items are always called *pre-loved* (or *twice-loved*, *pre-adored*, *secondhandsome*), never *second-hand*. There are no urgency words ("hurry", "last chance") and no big claims ("brand new", "flawless", "100% battery health"). The full rules are in [`brand/voice.md`](brand/voice.md).

## The campaign: The Calm Friday

**The Calm Friday** is a **free membership**. The campaign invites about 2,000 people on the EasyBuy waitlist to join it.

| What members get | Detail |
|---|---|
| Swap credits | Up to 500 credits (up to Rs 5,000) for each accepted item, based on the item and its condition |
| Credit value | 100 credits = Rs 1,000. Credits don't expire while the account is active. |
| Waitlist thank-you | 100 bonus credits (Rs 1,000) for joining by **Thursday 31 December 2026** |
| Calm Friday sale | **15% off** pre-loved phones, laptops, tablets and accessories on **Friday 1 January 2027** (not audio or wearables) |
| Using both | Credits can be used on the same order as the 15% off |

- **Goal:** 300 waitlist members join between Monday 7 December 2026 and Sunday 3 January 2027.
- **Channel:** email only.
- **Tone:** no pressure. Even the bonus deadline is a gentle reminder, never a push.

The full plan (calendar, metrics, budget, risks) is in [`campaigns/calm-friday-launch/plan.md`](campaigns/calm-friday-launch/plan.md). The offer decisions behind it are in [`campaigns/calm-friday/brief.md`](campaigns/calm-friday/brief.md).

## The groups involved

The waitlist is split into three groups. The practice list in [`leads/leads.csv`](leads/leads.csv) has 8 made-up people in each.

| Group | Who they are | What they care about | What we lead with |
|---|---|---|---|
| **Past Buyers** (`past-buyer`, about 50%) | Have bought a pre-loved gadget from EasyBuy before | Good gadgets, kind to their wallet. "What's the catch?" | Free to join, and the 15% saving on Calm Friday |
| **Past Sellers** (`past-seller`, about 25%) | Have sold or swapped an item with EasyBuy before | A fair, easy deal for old gadgets. "Will my item be accepted?" | Up to 500 swap credits that don't run out |
| **Quiet Users** (`quiet-user`, about 25%) | Joined the waitlist but haven't bought or sold yet | Trust and quality. "Is pre-loved worth it?" | Who we are and how we check every item, with no pressure |

The group sizes are working estimates until the real waitlist is exported.

## What customers told us

[`notes/scratchpad.md`](notes/scratchpad.md) sums up 120 made-up customer reviews from past EasyBuy sales (in `notes/reviews/`). What customers loved most was **good item condition** (41 mentions), then **good discounts** (19) and **easy swaps** (14). The biggest complaints were **weak perks or bonuses** (27), **bad sale timing** (20) and **sales that were too short** (14). Put together, timing and length are the top complaint, at about 33 reviews. Some of the Calm Friday choices answer these: bonus credits worth something real, credits that don't expire, and reminders sent before the sale day.

## Why there are 5 email files for a 4-email sequence

In `campaigns/calm-friday-launch/emails/` you will find five files, and two of them start with `04`:

```
01-your-spot-is-ready.md
02-how-it-works.md
03-your-questions-answered.md
04-calm-friday-is-tomorrow.md           <- join track
04-calm-friday-is-tomorrow-members.md   <- member track
```

This is on purpose. It is **not** a copy by mistake.

The campaign has **two tracks**:

- **Join track:** waitlist people who have **not joined yet**. Emails ask them to join.
- **Member track:** people who **have already joined**. They stop getting "please join" emails as soon as they sign up.

Emails 01 to 03 only go to the join track, so they need one version each. Email 04 is sent on **Thursday 31 December**, the day before Calm Friday, and by then both kinds of people exist. Each needs a different message:

| File | Sent to | What it says |
|---|---|---|
| `04-calm-friday-is-tomorrow.md` | People who haven't joined | Today is the last day to get the 100 bonus credits, and Calm Friday is tomorrow. If now isn't the right time, that's fine too. |
| `04-calm-friday-is-tomorrow-members.md` | People who have joined | Calm Friday is tomorrow, here is what's 15% off, and your credits are ready to use. |

Sending the join email to a member would ask them to join something they already joined, so it is split into two. Both share the `04` number because they are the same step in the sequence, sent on the same day. Each person gets only one of them.

**How the files map to the plan:** the plan lists more emails (E1 to E8 plus a welcome email). The four drafted so far are E1 (`01`), E2 (`02`), E4 (`03`) and E7 (`04`, both versions).

The same five files are repeated inside `groups/past-buyer/`, `groups/past-seller/` and `groups/quiet-user/`. Those are the personalised versions: each one has its opening line and one example reworded for that group. Everything else (offer, dates, link, sign-off) stays the same.

## Project structure

```
My_Email_Studio/
├── CLAUDE.md                  Main rules Claude Code follows in this repo
├── README.md                  This file
├── .mcp.json                  Connects the Resend email tool (practice mode by default)
├── .gitignore
│
├── brand/
│   └── voice.md               EasyBuy voice: words to use, words to avoid, claims never to make, sign-off
│
├── leads/
│   ├── CLAUDE.md              Rules for this folder (made-up people only, consent always filled)
│   └── leads.csv              24 made-up practice leads with @example.com addresses, 8 per group
│
├── campaigns/
│   ├── calm-friday/
│   │   └── brief.md           The offer brief and confirmed decisions
│   ├── calm-friday-launch/
│   │   ├── plan.md            Full campaign plan: audience, messages, calendar, metrics, budget, risks
│   │   ├── emails/            The main email drafts (4 emails, 5 files, see above)
│   │   └── groups/            Personalised copies of every email, one folder per lead group
│   │       ├── past-buyer/emails/
│   │       ├── past-seller/emails/
│   │       └── quiet-user/emails/
│   └── test-bad/
│       └── emails/01-bad.md   An email that breaks the rules on purpose, to test the review tools.
│                              Keep it broken.
│
├── notes/
│   ├── angle-a.md             Subject line ideas: "a calm daily ritual"
│   ├── angle-b.md             Subject line ideas: "discovering new deals"
│   ├── handoff.md             Why angle B was picked for email 01's subject
│   ├── skills-i-chose.md      Which outside skills to trust and why
│   ├── scratchpad.md          Loves and complaints found in the customer reviews, with counts
│   └── reviews/               120 made-up customer reviews across 6 files
│
├── review/
│   ├── findings.schema.json   The shape every review result must follow
│   └── findings.json          Results of the last automated review
│
├── scripts/
│   └── review.mjs             Runs an automated brand review of a campaign folder
│
├── .github/
│   └── workflows/
│       └── email-review.yml   Runs review.mjs on pull requests that change emails (see CI below)
│
└── .claude/
    ├── settings.json          Turns on the marketing plugin and the send guard
    ├── settings.local.json    Your own settings (not in git, you create it, see Setup)
    ├── hooks/
    │   └── send-guard.mjs     Blocks email to anyone except @resend.dev test addresses and MY_EMAIL
    ├── rules/
    │   └── emails.md          Format rules for every email file (subject length, link, footer)
    └── skills/
        └── personalize/
            └── SKILL.md       The /personalize skill: writes one copy of each email per lead group
```

## Safety: how email is kept away from real people

- **Fake leads only.** Every lead uses an `@example.com` address. That domain is reserved and can never receive mail.
- **Practice mode by default.** `.mcp.json` points the Resend tool at `http://localhost:4000` with a dummy key, unless you set your own values.
- **The send guard.** `.claude/hooks/send-guard.mjs` runs before every Resend tool call. It:
  - always blocks tools that can reach whole lists (broadcasts, automations, inbox sends),
  - allows single and batch sends only to `@resend.dev` test addresses and your own `MY_EMAIL`,
  - blocks the call if it can't read it, to be safe.

## Setting it up on your PC

### 1. What you need

- **Git**, to download the repo.
- **Node.js** (version 18 or newer). The send guard and the review script are written for Node, and the Resend tool runs through `npx`.
- **Claude Code**. Install it from [claude.com/claude-code](https://claude.com/claude-code) and sign in.

### 2. Download the repo

```bash
git clone https://github.com/UsamaHussain8/My-Email-Studio.git
cd My-Email-Studio
```

### 3. Create your local settings file

Create `.claude/settings.local.json`. It is ignored by git, so your address stays on your PC.

```json
{
  "enabledMcpjsonServers": ["resend"],
  "env": {
    "MY_EMAIL": "you@your-own-address.com"
  }
}
```

- `MY_EMAIL` is the only real address the send guard lets through. Use your own.
- `enabledMcpjsonServers` turns on the Resend tool from `.mcp.json`.

### 4. (Optional) Connect a real Resend account

You can skip this. Without it, Resend runs in practice mode and nothing leaves your PC.

To send real test emails to yourself or to `@resend.dev` addresses, set these before starting Claude Code:

| Variable | What it is |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_BASE_URL` | `https://api.resend.com` |
| `SENDER_EMAIL_ADDRESS` | The "from" address (default `onboarding@resend.dev`) |

The send guard still applies, so only `@resend.dev` and `MY_EMAIL` can receive anything.

### 5. Start Claude Code

```bash
claude
```

The first time, Claude Code will ask you to:

- **trust the folder.** Say yes.
- **install the marketing plugin** (`marketing@knowledge-work-plugins`, published by Anthropic). Say yes. It gives you `/marketing:campaign-plan`, `/marketing:email-sequence`, `/marketing:brand-review` and more.
- **approve the Resend MCP server.** Say yes if you want the email tool.

## How to find your way around

If you are new to the repo, read these in order:

1. [`brand/voice.md`](brand/voice.md): how EasyBuy sounds. Two minutes.
2. [`campaigns/calm-friday/brief.md`](campaigns/calm-friday/brief.md): the offer in short.
3. [`campaigns/calm-friday-launch/plan.md`](campaigns/calm-friday-launch/plan.md): the full plan. Sections 1 to 3 are enough to start.
4. [`campaigns/calm-friday-launch/emails/`](campaigns/calm-friday-launch/emails/): the actual emails.
5. [`.claude/rules/emails.md`](.claude/rules/emails.md): the format every email must follow.

### Things you can do

**Check the emails against the brand rules (inside Claude Code):**

```
/marketing:brand-review campaigns/calm-friday-launch/emails
```

**Run the automated review (from your normal terminal):**

```bash
node scripts/review.mjs campaigns/calm-friday-launch
```

This runs Claude Code with no one typing and saves the results to `review/findings.json`. It ends with exit code 1 if any problem is high severity. If you run it again on the same folder, it reports only new or still-unfixed problems.

Right now `review/findings.json` has an empty findings list. That's because the last review of `campaigns/calm-friday-launch` found no problems. The only earlier finding, a "free returns" promise in email 03, has been fixed, so it wasn't reported again.

To see the review tools catch mistakes, try it on the broken test email:

```bash
node scripts/review.mjs campaigns/test-bad
```

**Automatic review on GitHub (CI):**

`.github/workflows/email-review.yml` runs the same review on GitHub for every pull request that changes an email, `brand/voice.md`, the email rules or the review script. It reviews only the campaign folders that changed, or every campaign if a rule changed. The check fails if any finding is high severity. The findings show on the run's summary page and are saved as a download.

- It needs an `ANTHROPIC_API_KEY` secret in the repo settings.
- It only reads files. It has no Resend key and can't send email.
- `campaigns/test-bad` is skipped on pull requests, because it is broken on purpose. To see the check catch mistakes, open **Actions > Email review > Run workflow** and enter `campaigns/test-bad`.

**Write a copy of each email for every lead group (inside Claude Code):**

```
/personalize calm-friday-launch
```

This writes the files into `campaigns/calm-friday-launch/groups/<group>/emails/`. It never changes the main emails and never sends anything.

**Start a new campaign:** make a new folder in `campaigns/`, write a brief, then use `/marketing:campaign-plan` and `/marketing:email-sequence`. Put the drafts in an `emails/` folder inside it so the email rules apply.

## Ground rules

- Plain English everywhere.
- Never send email to real people. Only `@resend.dev` test addresses and your own `MY_EMAIL`.
- Never add real people to `leads/`.
- Ask before deleting anything.
