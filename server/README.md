# Kadabra Backend

FastAPI backend for Kadabra. Uses AudD API for music recognition.

## Setup
- Install dependencies: `pip install -r requirements.txt`
- Set your AudD API token as an environment variable: `AUDD_API_TOKEN=your_token_here`
- Run the server: `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`
