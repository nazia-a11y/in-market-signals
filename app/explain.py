import json

import anthropic

from app import config

PROMPT = """You are helping a B2B sales team decide who to contact today.
Here is everything we know about one company:

{facts}

Write two short sentences explaining why this company looks ready to buy.
Use only the facts above. Do not invent anything.
Then write one opening line for a sales email that does not mention tracking or intent data.
Reply only with JSON using the keys "why" and "opener"."""


def explain(account):
    if not config.ANTHROPIC_API_KEY:
        return {"why": "AI step skipped: no API key set.", "opener": ""}

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
        return {"why": "AI step returned no text.", "opener": ""}
    text = parts[0].strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[1].rsplit("```", 1)[0]
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {"why": text, "opener": ""}
