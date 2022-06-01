/*
 * @Author: chenjie
 * @Date: 2022-05-29 14:49:32
 * @LastEditors: chenjie
 * @LastEditTime: 2022-06-01 20:28:15
 * @FilePath: \redux_toolkit_todomvc\src\components\TodoFooter.jsx
 * @Description: TodoFooter
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { useSelector, useDispatch } from "react-redux"
import { clearCompletedTodo } from "../store/festures/todo-slice"
import { changeFilter } from '../store/festures/filter-slice'
import classNames from "classnames"
const TodoFooter = () => {
  const dispatch = useDispatch()
  const leftCount = useSelector(state => state.todo.todosList).filter(item => !item.done).length
  const filter = useSelector(state=>state.filter)
  const showClearBtn = useSelector(state => state.todo.todosList).some(item => item.done)

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className={classNames({selected:filter==='all'})} href="#/" onClick={() => dispatch(changeFilter('all'))}>All</a>
        </li>
        <li>
          <a className={classNames({selected:filter==='active'})}  href="#/active" onClick={() => dispatch(changeFilter('active'))}>Active</a>
        </li>
        <li>
          <a className={classNames({selected:filter==='completed'})}  href="#/completed" onClick={() => dispatch(changeFilter('completed'))}>Completed</a>
        </li>
      </ul>
      {
        showClearBtn ? <button className="clear-completed" onClick={() => dispatch(clearCompletedTodo())}>Clear completed</button> : null
      }

    </footer>
  )
}
export default TodoFooter