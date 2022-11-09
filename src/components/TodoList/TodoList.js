import { useContext } from "react";
import Context from "../../context";

import TodoItem from "../TodoItem/TodoItem";

import NoTasks from "../NoTasks/NoTasks";

import './todoList.scss';

const TodoList = () => {

    const {tasks} = useContext(Context);

    const renderTodos = (arr) => {
        return (
            <ul className="todoList__list">
                {arr.map(({id , text , isChecked} , i) => {
                    return (
                        <TodoItem 
                            key={id}
                            index={i}
                            id={id}
                            text={text}
                            isChecked={isChecked}
                        />
                    )
                })}
            </ul>
        )
    }

    const renderedTasks = renderTodos(tasks);

    return (
        <div className="todoList">
            {tasks.length > 0 ? renderedTasks : <NoTasks/>}
        </div>
    )
};

export default TodoList;