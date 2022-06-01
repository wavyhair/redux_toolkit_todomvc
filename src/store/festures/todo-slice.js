/*
 * @Author: chenjie
 * @Date: 2022-05-29 14:15:31
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-31 22:52:50
 * @FilePath: \redux_toolkit_todomvc\src\store\festures\todo-slice.js
 * @Description:
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
const initialState = {
  todosList: [
    { id: 1, text: '吃饭', done: true },
    { id: 2, text: '学习', done: false },
    { id: 3, text: '睡觉', done: true },
  ],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // 删除
    delTodos: (state, { payload }) => {
      state.todosList = state.todosList.filter((item) => item.id !== payload)
    },
    // 切换
    toggleTodos: (state, { payload }) => {
      state.todosList.forEach((item) => {
        if (item.id === payload) {
          item.done = !item.done
        }
      })
    },
    // 新增
    addTodos: (state, { payload }) => {
      state.todosList.unshift({ id: uuidv4(), text: payload, done: false })
    },
    // 全选
    toggleAllTodos: (state, { payload }) => {
      state.todosList.forEach((item) => (item.done = payload))
    },
    // 清除已经完成的
    clearCompletedTodo: (state, { payload }) => {
      state.todosList = state.todosList.filter((item) => !item.done)
    },
    // 更新
    updateTodos: (state, { payload }) => {
      const index = state.todosList.findIndex((item) => item.id === payload.id)
      if (index>=0) state.todosList[index].text = payload.text
    },
  },
})
export const {
  delTodos,
  toggleTodos,
  addTodos,
  toggleAllTodos,
  clearCompletedTodo,
  updateTodos,
} = todoSlice.actions
export default todoSlice.reducer
