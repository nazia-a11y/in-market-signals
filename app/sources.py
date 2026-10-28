import json
import random
from datetime import date
from pathlib import Path

from app import config

DEMO_DIR = Path(__file__).resolve().parent.parent / "demo_data"


def clean_domain(d):
    d = (d or "").strip().lower()
    for prefix in ("https://", "http://", "www."):
        if d.startswith(prefix):
            d = d[len(prefix):]
    return d.split("/")[0]


def get_visits():
    if config.DEMO_MODE:
        rows = json.loads((DEMO_DIR / "lead_forensics_visits.json").read_text())
        rng = random.Random("visits" + date.today().isoformat())
        for r in rows:
            r["visits"] = max(1, r["visits"] + rng.randint(-2, 2))
    else:
        rows = fetch_real_visits()
    for r in rows:
        r["domain"] = clean_domain(r["domain"])
    return rows


def get_surge(domains):
    if config.DEMO_MODE:
        rows = json.loads((DEMO_DIR / "bombora_surge.json").read_text())
        rng = random.Random("surge" + date.today().isoformat())
        for r in rows:
            r["surge_score"] = min(100, max(40, r["surge_score"] + rng.randint(-8, 8)))
    else:
        rows = fetch_real_surge(domains)
    for r in rows:
        r["domain"] = clean_domain(r["domain"])
    return [r for r in rows if r["domain"] in domains]


def fetch_real_visits():
    raise NotImplementedError("Fill this in when you switch to the real API (Step 10)")


def fetch_real_surge(domains):
    raise NotImplementedError("Fill this in when you switch to the real API (Step 10)")
