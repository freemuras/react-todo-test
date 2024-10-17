import "./App.css";
import Template from "./components/Template";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

/**
 * 1.Template 배경, 안에 TodoHead (날짜와 갯수 관리), TodoApp (내용)
 * 2.zustand를 이용
 * 3.css를 이용한 양식.
 */

function App() {
  return (
    <div className="App">
      <h1>Todo List 기술과제</h1>
      <Template>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </Template>
    </div>
  );
}

export default App;
