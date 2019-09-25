export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos = []) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  }
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo,
  }
}


// const newTodos = [{ id: 1, title: "test1", body: "test1 body", done: true }, { id: 2, title: "test2", body: "test2 body", done: false }, { id: 3, title: "test3", body: "test3 body", done: true}];
// store.dispatch(receiveTodo({ id: 3, title: "test3" }))

