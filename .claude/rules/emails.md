---
paths:
  - "campaigns/**/emails/*.md"
---

# Email file rules

These rules apply to every email file inside any campaign's `emails/` folder. Every email file must follow all of them.

## 1. Subject and preview lines

- The first line must be `Subject: ...`. The subject text must be 50 characters or fewer.
- The second line must be `Preview: ...`. The preview text must be 90 characters or fewer.

## 2. Greeting

- Greet the reader with `{{first_name}}`, using our brand greeting: `Dear {{first_name}},`

## 3. One main link

- Each email has exactly one main link.
- Write it like this: `[Button text](https://easybuy.example/calm-friday)`
- Change "Button text" to the words for the button. Keep the link address exactly as shown.

## 4. Ending

End every email with our sign-off from `brand/voice.md`:

Regards,
The EasyBuy Team

Then add this two-line footer, written as plain text. Do not put it inside a code block:

You're getting this because you joined the EasyBuy Calm Friday waitlist.
EasyBuy, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

Nothing comes after the footer.

## 5. Facts must match the campaign's own plan

- Every campaign has its own `plan.md` at the top of its folder, next to `emails/`. For example, emails in `campaigns/calm-friday-launch/` are checked against `campaigns/calm-friday-launch/plan.md`.
- When reviewing an email, also check it against its own campaign's `plan.md`. Every offer detail in the email (credits, discounts, what the discount covers, dates, deadlines, returns and so on) must match the plan, and the email must follow every accuracy rule in the plan.
- An email that states a fact the plan does not support, or breaks one of the plan's accuracy rules, is a high-severity problem. A wrong fact is a promise we can't keep.
- Copies in a campaign's `groups/<group>/emails/` folders belong to that same campaign and use the same `plan.md`.
- Use only that campaign's own plan. Never use another campaign's plan, emails or notes to judge it. What is true for one campaign can be wrong for another.
- If a campaign has no `plan.md`, report that as one high-severity problem, because its facts can't be checked.
