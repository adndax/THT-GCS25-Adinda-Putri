import { useState, useEffect } from "react";
import axios from "axios";
import droneLogo from "./assets/drone_web.png";
import "./App.css";
import TodoForm from "./TodoForm";

interface Todo {
  id: number; 
  name: string;
  description: string;
  created_at: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/task/")
      .then((response) => setTodos(response.data.result)) // result berisi array task
      .catch((error) => console.error(error));
  }, []);

  const handleAddTask = (newTodo: { name: string; description: string }) => {
    axios
      .post("http://localhost:8000/task/create", {
        parameter: newTodo, // Bungkus newTodo dalam parameter
      })
      .then((response) => {
        setTodos([...todos, response.data.result]); // Tambahkan task ke state
      })
      .catch((error) => console.error("Error adding task:", error.response));
  };

  const handleDeleteTask = (id: number) => {
    axios
      .delete(`http://localhost:8000/task/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id)); // Hapus dari state
      })
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
      <p className="slogan">Organize your tasks, reach for the sky!</p>
      <div className="card">
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