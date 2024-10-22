//fetch 기능을 이용하여 db에 있는 todos 값을 전체를 보여줌.
//fetch 기능은 js 내장 함수로, api로부터 데이터를 가져오거나 서버에 데이터를 전송할때 사용
//fetch는 promise 기반으로 동작하므로 비동기처리를 할수 있음.
//fetch의 응답은 response 객체로 반환. 이 객체에는 json(), text(), blob() 등과같은 메서드가 있어.
export const fetchTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  if (!response) throw new Error("Failed to fetch todos.");
  return response.json();
};

//fetch는 두번째 인수로 옵션 객체를 받아 요청의 방식을 설정
//설정방식으로는 http 메서드를 사용한다.
/**
 * fetch("주소")
 * method : '요청방식' => http 메서드 저장 : GET, POST, PUT, DELETE, PATCH
 * header : {'Content-Type': 'application/json',}, => 서버에 어떤 종류의 데이터를 보내는것인지 설명.
 * body : JSON.stringify({ 받아올 객체들. }),
 */

//할일의 시행여부 변경. method patch를 이용하여.
//updateTodo 실행시 done의 값을 !done 반대로 설정하여 반영된 값을 json으로 변경.
export const updateTodo = async (id, done) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "PATCH", //http 메서드 : 리소스의 일부를 업데이트 하고싶을때 사용
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !done }),
  });
  if (!response.ok) throw new Error("Failed to toggle todos");
  return response.json();
};

//할일 추가 기능, method Post이용하여. todoCreate.js에서 반영된 값(text)와
//done값은 false를 기초값으로 추가, id의 경우는 json 사용시 별도 생성이기 때문에 따로 관리할 필요없음
export const createTodo = async (text) => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      done: false,
    }),
  });
  if (!response.ok) throw new Error("Failed to create todos");
  return response.json();
};

//할일 수정 기능. method PATCH를 이용하여. Todoitem.js에서 반영된 값(newText)와 id값을 변수로 시행
export const correctTodo = async (id, newText) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: newText,
    }),
  });
  if (!response.ok) throw new Error("Failed to correct todos");
  return response.json();
};

//할일 삭제 기능 method DELETE 를 이용하여, id값 삭제, 삭제의 경우는 위와 다르게
//header body값을 사용할 필요가 없다.
export const removeTodo = async (id) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("failed to remove todo");
  return response.json();
};
