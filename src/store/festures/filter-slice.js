/*
 * @Author: chenjie
 * @Date: 2022-06-01 20:08:15
 * @LastEditors: chenjie
 * @LastEditTime: 2022-06-01 20:17:58
 * @FilePath: \redux_toolkit_todomvc\src\store\festures\filter-slice.js
 * @Description: 
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { createSlice } from '@reduxjs/toolkit'
const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload
    },
  },
})
export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
