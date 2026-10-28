from app import config, icp
from datetime import datetime, timedelta

ENGAGED_SECONDS = 30  # shorter page views are treated as bounces and ignored


def _path(url):
    return "/" + url.split("://", 1)[-1].split("/", 1)[-1].split("?")[0] if "://" in url else url.split("?")[0]


def website_points(visit, as_of):
    """Up to 60 points from Lead Forensics behaviour."""
    views = [v for v in visit.get("page_views", []) if v.get("seconds", 0) >= ENGAGED_SECONDS]
    paths = {_path(v["url"]) for v in views}
    points, reasons = 0, []

    def add(n, why):
        nonlocal points
        points += n
        reasons.append(why)

    if any("/contact" in p for p in paths):
        add(15, "Visited the contact page")
    if any("pricing" in p for p in paths):
        add(15, "Viewed pricing")
    if visit.get("visits", 0) >= 3:
        add(10, f"{visit['visits']} visits")
    if any("/case-studies/" in p for p in paths):
        add(5, "Read a case study")
    if len(paths) >= 5:
        add(5, f"Read {len(paths)} different pages")
    total = sum(v["seconds"] for v in views)
    if total >= 600:
        add(5, f"{total // 60} minutes on site")
    if views and as_of - max(datetime.fromisoformat(v["visited_at"]) for v in views) <= timedelta(days=2):
        add(5, "Visited in the last 2 days")
    return points, reasons


def intent_points(surges, topic_ids):
    """Up to 50 points from Bombora surges on the ticked topics."""
    relevant = [s for s in surges if s["topic_id"] in topic_ids]
    points, reasons = 0, []
    if relevant:
        top = max(relevant, key=lambda s: s["surge_score"])
        if top["surge_score"] >= 70:
            points += 40
            reasons.append(f"Strong surge on {top['topic']} ({top['surge_score']})")
        elif top["surge_score"] >= 60:
            points += 20
            reasons.append(f"Moderate surge on {top['topic']} ({top['surge_score']})")
        if sum(s["surge_score"] >= 60 for s in relevant) >= 2:
            points += 10
            reasons.append("Surging on more than one of your topics")
    return points, reasons


def score_account(visit, surges, topic_ids, as_of):
    web, web_reasons = website_points(visit, as_of)
    intent, intent_reasons = intent_points(surges, topic_ids)
    return web, intent, web_reasons + intent_reasons


def build_accounts(visits, surge_rows, rules):
    surge_by_domain = {}
    for row in surge_rows:
        surge_by_domain.setdefault(row["domain"], []).append(row)

    topic_ids = {t["id"] for t in rules.get("topics", [])}
    stamps = [pv["visited_at"] for v in visits for pv in v.get("page_views", [])]
    as_of = max(datetime.fromisoformat(t) for t in stamps) if stamps else datetime.now()
    crm = icp.crm_excluded_domains(rules)
    accounts = []
    for v in visits:
        surges = surge_by_domain.get(v["domain"], [])
        web, intent, reasons = score_account(v, surges, topic_ids, as_of)
        score = min(web + intent, 100)
        in_crm = v["domain"] in crm
        fits, gaps = icp.check_fit(v, rules, in_crm)
        hot = score >= config.HOT_THRESHOLD
        accounts.append({
            "company": v["company"],
            "domain": v["domain"],
            "industry": v.get("industry"),
            "employees": v.get("employees"),
            "country": v.get("country"),
            "visits": v.get("visits", 0),
            "pages": v.get("pages", []),
            "page_views": v.get("page_views", []),
            "surges": surges,
            "score": score,
            "web_points": web,
            "intent_points": intent,
            "reasons": reasons,
            "hot": hot,
            "in_crm": in_crm,
            "icp_fit": fits,
            "icp_gaps": gaps,
            "actionable": hot and fits,
        })

    accounts.sort(key=lambda a: a["score"], reverse=True)
    return accounts
