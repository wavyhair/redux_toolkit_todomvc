/*
 * @Author: chenjie
 * @Date: 2022-05-29 14:49:50
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-29 17:37:31
 * @FilePath: \redux_toolkit_todomvc\src\components\TodoHeader.jsx
 * @Description: TodoHeader
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { addTodos } from '../store/festures/todo-slice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const TodoHeader = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const onAddTodo = e => {
    if (e.keyCode !== 13 || text.trim() === '') return
    dispatch(addTodos(text))
    setText('')
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={onAddTodo}
        value={text}
        onChange={(e) => { setText(e.target.value) }}
        autoFocus
      />
    </header>
  )
}
export default TodoHeader