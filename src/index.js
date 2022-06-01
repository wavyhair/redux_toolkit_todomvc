/*
 * @Author: chenjie
 * @Date: 2022-05-29 13:59:23
 * @LastEditors: chenjie
 * @LastEditTime: 2022-05-29 14:25:04
 * @FilePath: \redux_toolkit_todomvc\src\index.js
 * @Description: 
 * Copyright (c) 2022 by chenjie, All Rights Reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
