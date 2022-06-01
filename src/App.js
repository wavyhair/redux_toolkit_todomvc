/*
 * @Author: chenjie
 * @Date: 2022-05-29 13:59:23
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-29 15:04:38
 * @FilePath: \redux_toolkit_todomvc\src\App.js
 * @Description:
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import './App.css'
import  TodoFooter  from './components/TodoFooter'
import  TodoHeader  from './components/TodoHeader'
import  TodoItem  from './components/TodoItem'
import  TodoMain  from './components/TodoMain'

function App() {
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain>
      </TodoMain>
      <TodoFooter />
    </section>
  )
}

export default App
