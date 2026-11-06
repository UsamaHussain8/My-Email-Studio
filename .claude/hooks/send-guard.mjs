// PreToolUse hook: stops Resend tools from emailing anyone except
// Resend test addresses (@resend.dev) and my own address (MY_EMAIL).
// Exit 0 = allow. Exit 2 = block (the reason on stderr is shown to Claude).

const ALWAYS_BLOCK = new Set([
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
]);

const CHECK_RECIPIENTS = new Set(["send-email", "send-batch-emails"]);

function block(reason) {
  process.stderr.write(`Send guard: ${reason}\n`);
  process.exit(2);
}

// Turn "Name <a@b.com>" or "a@b.com" into "a@b.com", lower case.
function bareAddress(value) {
  const text = String(value).trim();
  const match = text.match(/<([^>]+)>/);
  return (match ? match[1] : text).trim().toLowerCase();
}

function asList(value) {
  if (value === undefined || value === null || value === "") return [];
  return Array.isArray(value) ? value : [value];
}

let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  // This hook only runs for Resend tools, so fail closed.
  block("could not read the tool call, so it was blocked to be safe.");
}

const toolName = String(call.tool_name || "");
const action = toolName.replace(/^mcp__resend__/, "");
const input = call.tool_input || {};

if (ALWAYS_BLOCK.has(action)) {
  block(`${action} is blocked because it can reach whole lists of people.`);
}

if (!CHECK_RECIPIENTS.has(action)) {
  process.exit(0);
}

const myEmail = (process.env.MY_EMAIL || "").trim().toLowerCase();

const isAllowed = (address) =>
  address.endsWith("@resend.dev") || (myEmail !== "" && address === myEmail);

const emails = action === "send-batch-emails" ? asList(input.emails) : [input];

for (const email of emails) {
  for (const field of ["to", "cc", "bcc"]) {
    for (const value of asList(email && email[field])) {
      const address = bareAddress(value);
      if (!isAllowed(address)) {
        block(
          `${address} (in "${field}") is not allowed. ` +
            `Only @resend.dev test addresses and MY_EMAIL may receive email.`
        );
      }
    }
  }
}

process.exit(0);
