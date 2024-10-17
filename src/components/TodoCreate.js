import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import "../assets/css/TodoCreate.css";

function TodoCreate() {
  const { createTodo } = useTodoStore();
  const [textEditer, setTextEditer] = useState(false); //추가버튼에 의해 form 시행여부
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
    setTextEditer(false);
  };

  return (
    <div className="create-body">
      {textEditer ? (
        <div>
          <form onSubmit={onSubmit} className="insert-form">
            {/* 폼 제출 시 onSubmit 호출 */}
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)} // 입력 변경 시 상태 업데이트
              className="input"
            />
            <button className="add-button" type="submit">
              {/* 버튼 타입을 submit으로 설정 */}
              저장
            </button>
            <button
              className="add-button"
              onClick={() => setTextEditer(false)} // 수정 모드 종료
              type="button" // 버튼이 폼을 제출하지 않도록 설정
            >
              취소
            </button>
          </form>
        </div>
      ) : (
        <button className="add-button" onClick={() => setTextEditer(true)}>
          추가
        </button>
      )}
    </div>
  );
}

export default TodoCreate;
