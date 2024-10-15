import { create } from "zustand";


/**
 * zustand 기능을 이용하여. 주요기능 정리.
 * 1. seed라는 기초값 사용.
 */
const useTodoStore = create((set) => ({
    todos: [
        {
            id: 1,
            text: "할일 1...",
            done: false
        },
        {
            id: 2,
            text: "할일 2...",
            done: true
        },
    ],
    nextId : 3,
    // todos 기초값 설정.
    createTodo : (text) =>
        set((state) => ({
            todos : [...state.todos,
            { id : state.nextId, text, done : false }],
            nextId : state.nextId + 1,
        })),
    // create 할목록 추가하는 기능 추가
    // 스프레드 todos 배열을 스프레드 연산자 (...state)를 통해 분해하여.
    // id는 nextId 3, text, done:false(고정) 하여 새로운 배열 만듬.
    // 이후 nextId를, +1을 한 값으로 새롭게 반영함.

    updateTodo : (id) =>
        set((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? {...todo, done : !todo.done} : todo),
        })),
    // done값을 false -> true, true -> false 값으로 변경을 통하여. 시행유무를 반영하는 기능 추가
    // map의 순회기능을 이용하여, todo의 id와 불러온 id값이 일치하는 경우는 todo.done의 값을 반전하여.
    // 배열을 새로운 상태로 설정.

    removeTodo : (id) =>
        set((state) => ({
            todos : state.todos.filter((todo) => todo.id !== id),
        })),
    // filter 기능을 이용하여. todos값중 id와 반영된 id값이 다른 경우만 필터함.
    
    correctTodo : (id, newText) =>
        set((state) => ({
            todos : state.todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo),
        }))
}))
    // update와 비슷하게 map 기능을 통해. 단 수정할 값을 반영하기 위해. TodoCorrect 에서 입력된 값을
    // useState를 이용하여 newText라는 값을 불러와. 배열에 반영.

export default useTodoStore;