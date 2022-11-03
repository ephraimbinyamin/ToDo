import { useState } from "react";

import TodoAddInput from "../TodoAddInput/TodoAddInput";
import TodoList from "../TodoList/TodoList";

import './app.scss';

const App = () => {
    
    const [tasks , setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks , task]);
    };

    const deleteTask = (id) => {
        const newTaskList = tasks.filter(item => item.id !== id);
        setTasks([...newTaskList]);
    };

    return (
        <div className="app">
            <h1 className="app__header">To Do List</h1>
            <TodoAddInput addTask={addTask} />
            <TodoList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
};

export default App;