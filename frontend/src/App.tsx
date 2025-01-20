import { useState, useEffect } from "react";
import axios from "axios";
import droneLogo from "./assets/drone_web.png";
import "./App.css";
import TodoForm from "./TodoForm";

interface Todo {
  id: string;
  name: string;
  description: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios
      .get<Todo[]>("http://localhost:5000/items")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Add new task
  const handleAddTask = (newTodo: { name: string; description: string }) => {
    axios
      .post<Todo>("http://localhost:5000/items", newTodo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error("Error adding task:", error));
  };

  // Delete task by ID
  const handleDeleteTask = (id: string) => {
    axios
      .delete(`http://localhost:5000/items/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <>
      <div>
        <a href="https://www.instagram.com/aksantaraitb/" target="_blank">
          <img src={droneLogo} className="logo" alt="Drone" />
        </a>
      </div>
      <h1>AksanTask</h1>
      <p className="slogan">
        Organize your tasks, reach for the sky!
      </p>
      <div className="card">
        {/* Pass all handlers and data to TodoForm */}
        <TodoForm
          todos={todos}
          onAddTodo={handleAddTask}
          onDeleteTodo={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
