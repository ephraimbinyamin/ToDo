import { useState } from "react";

import TodoAddInput from "../TodoAddInput/TodoAddInput";
import TodoList from "../TodoList/TodoList";

import './app.scss';

const App = () => {
    return (
        <div className="app">
            <h1 className="app__header">ToDo List</h1>
            <TodoAddInput/>
            <TodoList/>
        </div>
    );
};

export default App;
