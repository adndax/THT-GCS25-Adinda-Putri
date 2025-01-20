from sqlalchemy import Column, Integer, String
from config import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)  # Auto-increment ID
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)