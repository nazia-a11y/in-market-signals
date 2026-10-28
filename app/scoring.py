from app import config, icp


def score_account(visit, surges):
    score = 0
    reasons = []
    pages = visit.get("pages", [])

    if any("pricing" in p for p in pages):
        score += 30
        reasons.append("Viewed the pricing page")
    if any("case-stud" in p for p in pages):
        score += 10
        reasons.append("Read a case study")
    if visit.get("visits", 0) >= 3:
        score += 20
        reasons.append(f"{visit['visits']} visits recently")

    relevant = [s for s in surges if s["topic"] in config.TOPICS]
    if relevant:
        top = max(relevant, key=lambda s: s["surge_score"])
        if top["surge_score"] >= 70:
            score += 40
            reasons.append(f"Strong surge on {top['topic']} ({top['surge_score']})")
        elif top["surge_score"] >= 60:
            score += 20
            reasons.append(f"Moderate surge on {top['topic']} ({top['surge_score']})")
        if len(relevant) >= 2:
            score += 10
            reasons.append("Surging on more than one of your topics")

    return min(score, 100), reasons


def build_accounts(visits, surge_rows, rules):
    surge_by_domain = {}
    for row in surge_rows:
        surge_by_domain.setdefault(row["domain"], []).append(row)

    crm = icp.crm_excluded_domains(rules)
    accounts = []
    for v in visits:
        surges = surge_by_domain.get(v["domain"], [])
        score, reasons = score_account(v, surges)
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
            "surges": surges,
            "score": score,
            "reasons": reasons,
            "hot": hot,
            "in_crm": in_crm,
            "icp_fit": fits,
            "icp_gaps": gaps,
            "actionable": hot and fits,
        })

    accounts.sort(key=lambda a: a["score"], reverse=True)
    return accounts
