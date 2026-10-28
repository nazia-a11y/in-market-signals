from datetime import date

from app import config, deliver, explain, icp, scoring, sources


def main():
    run_date = date.today().isoformat()
    print(f"Run {run_date} | demo mode: {config.DEMO_MODE}")

    visits = sources.get_visits()
    domains = {v["domain"] for v in visits}
    surge = sources.get_surge(domains)

    rules = icp.load_icp()
    accounts = scoring.build_accounts(visits, surge, rules)
    actionable = [a for a in accounts if a["actionable"]][: config.TOP_N]
    chosen = {a["domain"] for a in actionable}

    for a in accounts:
        a["ai"] = explain.explain(a) if a["domain"] in chosen else {"why": ""}

    deliver.save_results(accounts, run_date, rules)
    deliver.post_to_slack(actionable)
    deliver.update_hubspot(actionable)

    hot = sum(a["hot"] for a in accounts)
    print(f"Done: {len(accounts)} accounts checked, {hot} showing intent, "
          f"{len(actionable)} fit the ICP and are actionable")


if __name__ == "__main__":
    main()
