import React from "react";
import "../assets/css/Todobody.css";
import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodoStore();
  return (
    <div className="todo-item">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
