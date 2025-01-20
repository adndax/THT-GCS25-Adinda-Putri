# AksanTask: Organize your tasks, reach for the sky!

## Overview
AksanTask is a simple task management application built with a frontend, backend, and PostgreSQL database. The application is containerized using Docker for easier deployment and setup.

## Prerequisites
Before running the application, ensure the following are installed on your system:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Steps to Run the Application

### 1. Clone the Repository

Run the following command to clone the GitHub repository:
```bash
git clone https://github.com/adndax/THT-GCS25-Adinda-Putri.git
```

Navigate into the project directory:
```bash
cd ./THT-GCS25-Adinda-Putri.git
```

### 2. Navigate to Backend and Frontend
The project contains two main directories:

- `backend`: Contains the FastAPI backend.
- `frontend`: Contains the React frontend.

### 3. Setup and Run Using Docker Compose

#### Step 3.1: Build and Run the Application
Run the following command to build and start the application:
```bash
docker-compose up --build
```
This will:
- Build the Docker images for the frontend and backend.
- Start the PostgreSQL database.
- Set up the required containers and link them together.

#### Step 3.2: Access the Application
- Frontend: Access the frontend in your browser at [http://localhost:3000](http://localhost:3000).
- Backend API: Access the backend API documentation at [http://localhost:5000/docs](http://localhost:5000/docs).

### 4. Stopping the Application
To stop the application and remove containers:
```bash
docker-compose down
```

### 5. Updating Environment Variables (Optional)
If needed, you can modify environment variables in the `docker-compose.yml` file to configure the database or application settings.

### 6. Manual Testing
If you'd like to run the backend or frontend without Docker:

#### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd ./backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend:
   ```bash
   uvicorn main:app --reload
   ```

#### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd ./frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```

## Folder Structure
- **backend/**: Contains FastAPI backend code.
- **frontend/**: Contains React frontend code.
- **docker-compose.yml**: Defines the services for Docker Compose.
- **README.md**: Instructions to set up and run the project.

---

### Enjoy using AksanTask to organize your tasks and reach for the sky!
