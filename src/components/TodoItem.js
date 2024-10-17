import React, { useState } from "react";
import "../assets/css/Todobody.css";
import useTodoStore from "../store/useTodoStore";

const TodoItem = ({ id, text, done }) => {
  const { updateTodo, removeTodo, correctTodo } = useTodoStore();

  const [textEditer, setTextEditer] = useState(false); //false, true 변경을 통해 수정버튼 누를시, edit가 열리기 위한 기능
  const [newText, setNewText] = useState(text); // 입력할 새 텍스트
  const onUpdate = () => updateTodo(id);
  const onDelete = () => removeTodo(id);
  const onCorrect = () => {
    correctTodo(id, newText);
    setTextEditer(false); //수정을 다하고나면 다시 false로 변경을 하여 닫힘
  };

  return (
    <div className="todo-item">
      <button className="todo-buttons" onClick={onUpdate}>
        {done ? "완료" : "미완"}
      </button>
      {/** onupdate(updateTodo에 id 매게 변수를 넣어 실행)
       * 값은 done의 값이 true인 경우는 "완료", false인 값은 "미완"으로 표시
       */}
      {textEditer ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)} // 입력 변경 시 상태 업데이트
            className="input"
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
        </>
      ) : (
        <>
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
