# AI Customer Support Chatbot

A fictional local chatbot application created for an independent manual QA portfolio project.

## Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Python, Flask
- API: REST
- AI integration: OpenAI-compatible API

## Run Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Create a local `.env` file using `.env.example` and add your own API key.

Then:

```bash
python app.py
```

The API runs on `http://127.0.0.1:5000`.

Open `frontend/index.html` in a browser.

## Security

Never commit `.env` or API keys to GitHub.
