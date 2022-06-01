/*
 * @Author: chenjie
 * @Date: 2022-05-29 14:50:05
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-31 22:54:38
 * @FilePath: \redux_toolkit_todomvc\src\components\TodoItem.jsx
 * @Description: TodoItem
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { delTodos, toggleTodos ,updateTodos } from '../store/festures/todo-slice'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'
import { useState ,useRef, useEffect} from 'react'
const TodoItem = ({ id, text, done }) => {
    const dispatch = useDispatch()
    const [showInput, setShowInput] = useState(false)
    const [todoValue,setTodoValue] = useState(text)
    const editInput = useRef()
    useEffect(()=>{
        if(showInput) editInput.current.focus()
    },[showInput])
    // 失焦事件
    const inputOnBlur = ()=>{
        setShowInput(false)
        setTodoValue(text)
    }
    // 按下回车事件
    const inputKeyDown = (e)=>{
        if(e.keyCode!==13)return
        if(!todoValue.trim()) return
        dispatch(updateTodos({id,text:todoValue}))
        setShowInput(false)
    }
    return (
        <>
            <li className={classnames({ completed: done ,editing: showInput})}>
                {!showInput ?
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={done}  onChange={() => {
                            dispatch(toggleTodos(id))
                        }} />
                        <label onDoubleClick={()=>setShowInput(true)}>{text}</label>
                        <button className="destroy" onClick={(() => {
                            dispatch(delTodos(id))
                        })}></button>
                    </div>
                    :
                    <input ref={editInput} className="edit" value={todoValue} onBlur={inputOnBlur} onKeyDown={inputKeyDown} onChange={(e)=>{setTodoValue(e.target.value)}}/>}
            </li>
        </>
    )
}
export default TodoItem
