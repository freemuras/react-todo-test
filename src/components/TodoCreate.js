import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import "../assets/css/TodoCreate.css";
import { fetchTodos, createTodo } from "../service/api";

function TodoCreate() {
  const { setTodos } = useTodoStore();
  const [textEditer, setTextEditer] = useState(false); //추가버튼에 의해 form 시행여부
  const [value, setValue] = useState(""); //입력한 값 저장.

  //api 의 createTodo 기능을 onsubmit의 이용하여 받아온 값 value로 사영
  //fetchTodos()를 사용하여. 업데이트된 할일 목록을 반환받고, 받은 값을 result로 정의하여
  //setTodos()에 위 결과값을 호출하여 상태를 업데이트합니다. 이렇게 하면 컴포넌트가 최신 할 일 목록으로 다시 렌더링
  const onSubmit = async (e) => {
    e.preventDefault();
    await createTodo(value);
    const result = await fetchTodos();
    setTodos(result);

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
