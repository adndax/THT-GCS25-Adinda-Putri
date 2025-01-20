import React, { useState } from "react";
import './TodoForm.css';

interface Todo {
  id: string;
  name: string;
  description: string;
}

interface TodoFormProps {
  todos: Todo[];
  onAddTodo: (newTodo: { name: string; description: string }) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  todos,
  onAddTodo,
  onDeleteTodo,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onAddTodo({ name, description });
      setName("");
      setDescription("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button 
            type="submit" 
            className="button"
            disabled={!name || !description}>
          Add Task
        </button>
      </form>

      {/* Render table inside TodoForm */}
      {todos.length === 0 ? (
        <p className="empty-task">Task masih kosong.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>
                  <button
                    onClick={() => onDeleteTodo(todo.id)}
                    className="button-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TodoForm;