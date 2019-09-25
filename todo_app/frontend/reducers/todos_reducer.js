import { merge } from 'lodash';
import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const _initalState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = _initalState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS: {
      action.todos.forEach(obj => {
        newState[obj.id] = obj
      });
      return newState;
    }
    case RECEIVE_TODO: {
      const { id, title, body, done } = action.todo;
      debugger
      const newItem = { [id]: { id, title, body, done }};
      return merge({}, state, newItem);
    }
    default: {
      return state;
    }
  }
}


export default todosReducer;

// In lecture why did connor do [id] instead of id?