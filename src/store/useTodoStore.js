import { create } from "zustand";

/**
 * zustand 기능을 이용하여. 주요기능 정리.
 * 1. todos의 바뀐 값을 받아와서 db에 있는 todos를 변경.
 */
const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
}));

export default useTodoStore;
