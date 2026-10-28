import json
from pathlib import Path

import requests

from app import config

HUBSPOT = "https://api.hubapi.com/crm/v3/objects/companies"


def save_results(accounts, run_date, rules):
    out = Path("results")
    out.mkdir(exist_ok=True)
    path = out / "latest.json"
    path.write_text(json.dumps({"run_date": run_date, "icp": rules, "accounts": accounts}, indent=2))

    if config.HF_TOKEN and config.HF_DATASET_REPO:
        from huggingface_hub import HfApi
        HfApi(token=config.HF_TOKEN).upload_file(
            path_or_fileobj=str(path),
            path_in_repo="latest.json",
            repo_id=config.HF_DATASET_REPO,
            repo_type="dataset",
            commit_message=f"Results for {run_date}",
        )
    else:
        print("Hugging Face upload skipped")


def post_to_slack(hot):
    if not config.SLACK_WEBHOOK_URL:
        print("Slack skipped")
        return
    if not hot:
        text = "No in-market accounts today."
    else:
        lines = ["*Today's in-market accounts*"]
        for a in hot:
            lines.append(
                f"• *{a['company']}* ({a['domain']}), score {a['score']}\n"
                f"    {a['ai']['why']}\n"
                f"    _Opener:_ {a['ai']['opener']}"
            )
        text = "\n".join(lines)
    requests.post(config.SLACK_WEBHOOK_URL, json={"text": text}, timeout=30).raise_for_status()


def update_hubspot(hot):
    if not config.HUBSPOT_TOKEN:
        print("HubSpot skipped")
        return
    headers = {"Authorization": f"Bearer {config.HUBSPOT_TOKEN}"}
    for a in hot:
        props = {"intent_score": a["score"], "ai_insight": a["ai"]["why"]}
        search = requests.post(
            f"{HUBSPOT}/search",
            headers=headers,
            json={"filterGroups": [{"filters": [
                {"propertyName": "domain", "operator": "EQ", "value": a["domain"]}
            ]}], "limit": 1},
            timeout=30,
        )
        search.raise_for_status()
        found = search.json().get("results", [])
        if found:
            r = requests.patch(f"{HUBSPOT}/{found[0]['id']}", headers=headers,
                               json={"properties": props}, timeout=30)
        else:
            r = requests.post(HUBSPOT, headers=headers, json={"properties": {
                "name": a["company"], "domain": a["domain"], **props}}, timeout=30)
        r.raise_for_status()
