from fastapi import APIRouter, HTTPException, Path, Depends
from config import SessionLocal
from sqlalchemy.orm import Session
from schemas import TaskSchema, Request, Response, RequestTask
import crud

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/create")
async def create_task_service(request: RequestTask, db: Session = Depends(get_db)):
    created_task = crud.create_task(db, task=request.parameter)
    return Response(
        status="Ok",
        code="200",
        message="Task created successfully",
        result=created_task
    ).dict(exclude_none=True)

@router.delete("/{id}")
async def delete_task(id: int, db: Session = Depends(get_db)):
    task = crud.remove_task(db, task_id=id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return Response(
        status="Ok",
        code="200",
        message="Task deleted successfully",
        result=None
    ).dict(exclude_none=True)

@router.get("/")
async def get_tasks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    tasks = crud.get_tasks(db, skip, limit)
    return Response(
        status="Ok",
        code="200",
        message="Success fetch all data",
        result=tasks
    ).dict(exclude_none=True)