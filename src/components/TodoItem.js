import React, { useState } from "react";
import "../assets/css/Todobody.css";
import useTodoStore from "../store/useTodoStore";
import {
  correctTodo,
  fetchTodos,
  removeTodo,
  updateTodo,
} from "../service/api";

const TodoItem = ({ id, text, done }) => {
  const [textEditer, setTextEditer] = useState(false); // 수정 모드를 나타내는 상태 변수 (true: 수정 중, false: 일반 모드)
  const [newText, setNewText] = useState(text); // 입력할 새로운 텍스트를 저장하는 상태 변수, 초기값은 기존의 텍스트
  const { setTodos } = useTodoStore(); // Zustand에서 제공하는 setTodos 함수 가져오기

  // 할 일 업데이트 함수
  const onUpdate = async () => {
    await updateTodo(id, done); // 현재 할 일을 업데이트 (완료/미완료 상태 변경)
    const result = await fetchTodos(); // 업데이트된 할 일 목록을 가져옴
    setTodos(result); // 상태를 업데이트하여 UI에 반영
  };

  // 할 일 삭제 함수
  const onDelete = async () => {
    await removeTodo(id); // 주어진 id의 할 일을 삭제
    const result = await fetchTodos(); // 삭제 후 업데이트된 할 일 목록을 가져옴
    setTodos(result); // 상태를 업데이트하여 UI에 반영
  };

  // 할 일 수정 함수
  const onCorrect = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지
    await correctTodo(id, newText); // 주어진 id의 할 일을 newText로 수정
    const result = await fetchTodos(); // 수정 후 업데이트된 할 일 목록을 가져옴
    setTodos(result); // 상태를 업데이트하여 UI에 반영
    setTextEditer(false); // 수정 모드 종료
  };

  return (
    <div className="todo-item">
      {/** onupdate(updateTodo에 id 매게 변수를 넣어 실행)
       * 값은 done의 값이 true인 경우는 "완료", false인 값은 "미완"으로 표시
       */}
      {textEditer ? (
        <>
          <form onSubmit={onCorrect} className="insert-form">
            <input
              className="input"
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)} // 입력 변경 시 상태 업데이트-
            />
            <button className="todo-buttons" onClick={onCorrect}>
              저장
            </button>
            <button
              className="todo-buttons"
              onClick={() => setTextEditer(false)} // 수정 모드 종료
            >
              취소
            </button>
          </form>
        </>
      ) : (
        <>
          <button className="todo-buttons" onClick={onUpdate}>
            {done ? "완료" : "미완"}
          </button>
          <div className="todo-text">{text}</div>
          <button className="todo-buttons" onClick={() => setTextEditer(true)}>
            수정
          </button>
          <button className="todo-buttons" onClick={onDelete}>
            삭제
          </button>
        </>
      )}
      {/**textEditer의 값이 true일 경우는
       * input :
       * false인 경우
       */}
    </div>
  );
};

export default TodoItem;
