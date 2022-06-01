/*
 * @Author: chenjie
 * @Date: 2022-05-29 14:50:13
 * @LastEditors: chenjie
 * @LastEditTime: 2022-06-01 20:32:29
 * @FilePath: \redux_toolkit_todomvc\src\components\TodoMain.jsx
 * @Description: TodoMain
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import TodoItem from "./TodoItem"
import { useSelector, useDispatch } from "react-redux"
import { toggleAllTodos } from '../store/festures/todo-slice'
const TodoMain = () => {
    const todosList = useSelector(state => {
        if (state.filter === 'active') {
            return state.todo.todosList.filter(item => item.done===false)
        } else if (state.filter === 'completed') {
            return state.todo.todosList.filter(item => item.done)
        } else return state.todo.todosList
    })
    const checAll = !todosList.some(item => !item.done)
    const dispatch = useDispatch()
    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={checAll}
                onChange={(e) => dispatch(toggleAllTodos(e.target.checked))}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todosList.map(item =>
                    (<TodoItem key={item.id} {...item} />)
                )}

            </ul>
        </section>
    )
}
export default TodoMain
