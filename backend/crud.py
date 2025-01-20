from sqlalchemy.orm import Session
from models import Task
from schemas import TaskSchema


def create_task(db: Session, task: TaskSchema):
    db_task = Task(name=task.name, description=task.description)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)  # Refresh untuk mendapatkan ID yang baru dibuat
    return db_task


def get_tasks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Task).offset(skip).limit(limit).all()


def remove_task(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()
    if task:
        db.delete(task)
        db.commit()
        return task
    return None