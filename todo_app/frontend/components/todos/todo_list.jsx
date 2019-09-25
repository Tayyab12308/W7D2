import React from 'react'
import TodoForm from '../todo_list/todo_form';

// module.exports = () => <h3>Todo List goes here!</h3>

const todoList = (props) => {
  debugger
  return (
    <>
      <h3>Todo List goes here! {props.todos[0].title}</h3>
      <ul>
        {props.todos.map((todo, idx) => {
          return ( 
            <li key={idx}>
                {todo.id} 
              <ul>
                <li>Title: {todo.title}</li>
                <li>Body: {todo.body}</li>
              </ul>
            </li> 
          )
          })}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </>
  )
}

export default todoList;