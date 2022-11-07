import { useState } from "react";

import TodoAddInput from "../TodoAddInput/TodoAddInput";
import TodoList from "../TodoList/TodoList";
import Theme from "../Theme/Theme";

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

    const toggleCheckTask = (id) => {
        const newTaskList = tasks.map((item) => {
            if(item.id == id) {
                return {
                    id: item.id,
                    text: item.text,
                    isChecked: !item.isChecked
                };
            }
            return item;
        });
        setTasks([...newTaskList]);
    };

    const editTask = (id , text) => {
        const newTaskList = tasks.map((item) => {
            if(item.id == id) {
                return {
                    id: item.id,
                    text: text,
                    isChecked: item.isChecked
                };
            }
            return item;
        });
        setTasks([...newTaskList]);
    };

    return (
        <div className="app">
            <h1 className="app__header">To Do List</h1>
            <TodoAddInput addTask={addTask} />
            <TodoList 
                tasks={tasks} 
                deleteTask={deleteTask} 
                toggleCheckTask={toggleCheckTask} 
                editTask={editTask} 
            />
            <Theme/>
        </div>
    );
};

export default App;