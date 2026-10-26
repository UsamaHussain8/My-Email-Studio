# Skills I chose

Searched skills.sh on 2026-10-26 ("email marketing", "email sequence", "campaign plan", "resend"). Nothing is installed yet. Star counts come from the public GitHub API. I judged the skills from their listings and repo stats only; I haven't read their contents yet.

## Use these

1. **anthropics/knowledge-work-plugins** (for writing campaigns)
   - Published by Anthropic, the company behind Claude. About 33,000 stars, and it was updated today.
   - It has both `campaign-plan` and `email-sequence` skills, so one source covers planning a campaign and writing the emails in it.
   - Install counts are lower (about 3,000) than the community alternatives, but an official publisher matters more to me than popularity.
   - Runner-up: coreyhaines31/marketingskills (about 56,000 stars, very popular, individual author). Good to read for ideas, but I'd treat it as second choice.

2. **resend/resend-skills** (for sending email)
   - Published by Resend, the company that makes the email service itself. 207 stars (small, but that's normal for a vendor's own docs-style repo), updated within the last 10 days.
   - Its `resend` skill is the main one; the same publisher also has `email-best-practices` (146 stars) for deliverability and formatting rules.
   - Who knows the Resend API better than Resend?

## Avoid these

1. **caffeinelabs/skills@extension-email-marketing**
   - 28,200 installs but only 2 GitHub stars. Those two numbers don't fit together, and a skill with almost no stars and a lot of installs makes me suspect inflated or automated counts.
   - Unknown publisher with no track record.

2. **claude-office-skills/skills@email-marketing**
   - The name sounds official, but it isn't from Anthropic. It's a third-party account.
   - 541 stars and the last update was January 2026, so it's about nine months stale. Email platforms and rules change, so I'd not build on it.

(Also ignored: `lark-mail` results at the top of the search. They're for Lark/Feishu mail and don't fit this project, despite the huge install numbers.)

## How I decided

Check these three things before installing any skill:

1. **Who publishes it.** Prefer the company that owns the thing (Anthropic for Claude, Resend for Resend). Be careful with names that only sound official.
2. **Whether the repo is real and alive.** Look at the GitHub stars and the last-updated date. Stars and installs should roughly agree, and the repo should have been touched in the last few months.
3. **What it actually tells the agent to do.** Read the SKILL.md before installing. A skill is instructions your agent will follow, so check it doesn't ask for API keys, run odd commands, or send data somewhere you don't expect.
