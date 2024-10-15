import React from 'react'
import useTodoStore from '../store/useTodoStore';

const TodoItem = ({ id, text, done }) => {

    const {updateTodo, removeTodo} = useTodoStore();
    const onupdate = updateTodo(id);
    const ondelete = removeTodo(id);

    return (
        <div>
            <button onClick={onupdate}>수정</button>
            <button onClick={ondelete}>삭제</button>
        </div>
    );
};

export default TodoItem;