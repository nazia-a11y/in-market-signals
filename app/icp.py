import json
from pathlib import Path

import requests

from app import config

DEFAULT_ICP = Path(__file__).resolve().parent.parent / "icp.json"
SEARCH = "https://api.hubapi.com/crm/v3/objects/companies/search"


def load_icp():
    """Use the ICP saved from the dashboard's Settings tab if there is one,
    otherwise the default icp.json in this repo."""
    if config.HF_DATASET_REPO:
        from huggingface_hub import hf_hub_download
        from huggingface_hub.utils import EntryNotFoundError
        try:
            path = hf_hub_download(
                repo_id=config.HF_DATASET_REPO,
                filename="icp.json",
                repo_type="dataset",
                token=config.HF_TOKEN or None,
                force_download=True,
            )
            print("Using the ICP saved from the dashboard")
            return json.loads(Path(path).read_text())
        except EntryNotFoundError:
            pass
    print("Using the default ICP in icp.json")
    return json.loads(DEFAULT_ICP.read_text())


def crm_excluded_domains(rules):
    """HubSpot companies at the stages listed in the ICP, such as customers."""
    stages = rules.get("exclude_hubspot_stages", [])
    if not (config.HUBSPOT_TOKEN and stages):
        return set()

    domains = set()
    headers = {"Authorization": f"Bearer {config.HUBSPOT_TOKEN}"}
    after = None
    while True:
        body = {
            "filterGroups": [{"filters": [
                {"propertyName": "lifecyclestage", "operator": "IN", "values": stages}
            ]}],
            "properties": ["domain"],
            "limit": 100,
        }
        if after:
            body["after"] = after
        r = requests.post(SEARCH, headers=headers, json=body, timeout=30)
        r.raise_for_status()
        data = r.json()
        for c in data.get("results", []):
            d = (c.get("properties", {}).get("domain") or "").lower()
            if d:
                domains.add(d)
        after = data.get("paging", {}).get("next", {}).get("after")
        if not after:
            return domains


def check_fit(company, rules, in_crm):
    """Returns (fits, gaps). gaps lists every reason it does not fit."""
    gaps = []
    if in_crm:
        gaps.append("Already a customer or open deal in HubSpot")
    if company["domain"] in {d.lower() for d in rules.get("exclude_domains", [])}:
        gaps.append("On the always-exclude list")

    industry = company.get("industry")
    if rules.get("industries") and industry not in rules["industries"]:
        gaps.append(f"Industry outside ICP ({industry or 'unknown'})")

    employees = company.get("employees")
    if employees is None:
        gaps.append("Company size unknown")
    elif not rules["min_employees"] <= employees <= rules["max_employees"]:
        gaps.append(f"Size outside ICP ({employees} employees)")

    country = company.get("country")
    if rules.get("countries") and country not in rules["countries"]:
        gaps.append(f"Country outside ICP ({country or 'unknown'})")

    return not gaps, gaps
