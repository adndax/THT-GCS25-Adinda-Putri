from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from config import engine
from routes import router

# Inisialisasi FastAPI
app = FastAPI()

# Tambahkan middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Membuat tabel di database (jika belum ada)
models.Base.metadata.create_all(bind=engine)

app.include_router(router, prefix="/task", tags=["task"])