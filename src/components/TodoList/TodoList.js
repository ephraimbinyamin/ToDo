import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";
import NoTasks from "../NoTasks/NoTasks";

import './todoList.scss';

const TodoList = () => {

    const tasks = useSelector(state => state.tasks);

    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
    
    const renderTodos = (arr) => {
        return (
            <ul className="todoList__list">
                {arr.map(({id , text , isChecked}) => {
                    return (
                        <TodoItem 
                            key={id}
                            id={id}
                            text={text}
                            isChecked={isChecked}
                        />
                    )
                })}
            </ul>
        )
    }

    const renderedTasks = renderTodos(localStorageTasks === null ? [] : localStorageTasks);

    return (
        <div className="todoList">
            {tasks.length > 0 ? renderedTasks : <NoTasks/>}
        </div>
    )
};

export default TodoList;