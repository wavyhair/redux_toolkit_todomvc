/*
 * @Author: chenjie
 * @Date: 2022-05-29 14:13:07
 * @LastEditors: chenjie
 * @LastEditTime: 2022-06-01 20:15:57
 * @FilePath: \redux_toolkit_todomvc\src\store\index.js
 * @Description: 
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./festures/todo-slice";
import filterSlice from "./festures/filter-slice";
const store = configureStore({
    reducer:{
        todo:todoSlice,
        filter:filterSlice
    }
})
export default store