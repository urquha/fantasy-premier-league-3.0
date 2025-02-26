# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/league")
async def get_league_table():
    league_data = [
        {"rank": 1, "teamName": "Team A", "points": 30},
        {"rank": 2, "teamName": "Team B", "points": 28},
        {"rank": 3, "teamName": "Team C", "points": 25},
    ]
    return league_data

# For local development, you might run the app like this:
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
