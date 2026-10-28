import os

DEMO_MODE = os.getenv("DEMO_MODE", "true").lower() == "true"

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")
CLAUDE_MODEL = os.getenv("CLAUDE_MODEL", "claude-haiku-5-5")

LEAD_FORENSICS_API_KEY = os.getenv("LEAD_FORENSICS_API_KEY", "")
BOMBORA_API_KEY = os.getenv("BOMBORA_API_KEY", "")

SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL", "")
HUBSPOT_TOKEN = os.getenv("HUBSPOT_TOKEN", "")

HF_TOKEN = os.getenv("HF_TOKEN", "")
HF_DATASET_REPO = os.getenv("HF_DATASET_REPO", "")

TOPICS = [t.strip() for t in os.getenv(
    "TOPICS", "Colocation,Data Center Migration,Cloud Infrastructure").split(",")]
HOT_THRESHOLD = int(os.getenv("HOT_THRESHOLD", "70"))
TOP_N = int(os.getenv("TOP_N", "10"))
