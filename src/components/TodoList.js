import React, { useEffect } from "react";
import "../assets/css/Todobody.css";
import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../service/api";

function TodoList() {
  const { todos, setTodos } = useTodoStore();
  useEffect(() => {
    (async () => {
      const result = await fetchTodos();
      setTodos(result);
    })(); //익명함수
  }, [setTodos]);
  //setTodos 값이 바뀔때만 함수가 작동하게.

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
