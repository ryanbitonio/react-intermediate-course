import axios from "axios";
import React, { useEffect, useState } from "react";
import useTodos from "../routing/hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
