import json

import anthropic

from app import config

PROMPT = """Here is everything we know about one company that visited our website:

{facts}

In no more than two short sentences, explain why this company appears to be in market right now.
Start with the company's name. Refer to the strongest signals only: the pages it visited and the topics it is researching.
Use only the facts above, exactly as stated. Keep each fact separate: never combine two facts into one claim,
and never describe a page more specifically than its address shows. Write in plain British English,
with no greeting, no recommendation and no selling.
Reply only with JSON using the key "why"."""


def explain(account):
    if not config.ANTHROPIC_API_KEY:
        return {"why": "AI step skipped: no API key set."}

    facts = json.dumps(
        {k: account[k] for k in ("company", "industry", "employees", "country", "visits", "pages", "surges", "score", "reasons")},
        indent=2,
    )
    client = anthropic.Anthropic(api_key=config.ANTHROPIC_API_KEY)
    message = client.messages.create(
        model=config.CLAUDE_MODEL,
        max_tokens=1024,
        messages=[{"role": "user", "content": PROMPT.format(facts=facts)}],
    )
    parts = [b.text for b in message.content if getattr(b, "type", "") == "text"]
    if not parts:
        return {"why": "AI step returned no text."}
    text = parts[0].strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1].rsplit("```", 1)[0]
    try:
        return {"why": json.loads(text).get("why", "")}
    except (json.JSONDecodeError, AttributeError):
        return {"why": text}
