import React from 'react'
import TodoItem from './TodoItem'
import useTodoStore from '../store/useTodoStore';

function TodoList() {
  const { todos } = useTodoStore();
  console.log(todos)
  return (
    <div>
    <h2>할 일 목록</h2>
    <ul>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
</div>
  )
}

export default TodoList;