import React from "react";
import "../assets/css/TodoHead.css";
import useTodoStore from "../store/useTodoStore";

export default function TodoHead() {
  const { todos } = useTodoStore();
  //useTodoStore에 있는. todos의 값을 반영.
  const datacalculate = todos.filter((todo) => !todo.done).length;
  //datacalculate 라는 변수를 선언 : todos에서 todo의 done 값이 false인 값만 불어와서 length를 통해 몇개인지 확인
  const today = new Date();
  //자바스크립의 date 를 통해 금일 날짜 반영
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayString = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });
  //한국어로 연도, 월, 일 및 요일을 표시
  return (
    <div className="todo-head">
      <h1> To do list</h1>
      <h1> {dateString} </h1>
      <div> {dayString} </div>
      <div> 금일 남은 할일은 총 {datacalculate} 개 남았습니다.</div>
    </div>
  );
}
