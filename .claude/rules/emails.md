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
