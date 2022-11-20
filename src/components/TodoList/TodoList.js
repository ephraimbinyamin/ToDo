import { useDispatch , useSelector } from "react-redux";
import { toggleDisplayCheckedTasks } from "../../actions";

import TodoItem from "../TodoItem/TodoItem";
import NoTasks from "../NoTasks/NoTasks";

import './todoList.scss';

const TodoList = () => {

    const dispatch = useDispatch();
    
    const {tasks , tasksToBottom , displayCheckedTasks} = useSelector(state => state);

    const renderTasks = (arr) => {
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

    const renderedTasks = renderTasks(tasks);

    const checkTasksToTheBottom = (arr) => {
        const completedTasksNumber = arr.filter(({isChecked}) => isChecked === true).length;
        return (
            <>
                <ul className="todoList__list">
                    {arr.filter(({isChecked}) => isChecked === false)
                        .map(({id , text , isChecked}) => {
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
                {
                    completedTasksNumber > 0 ?
                    <>
                        <hr className="todoList__divider"/>
                        <div className={`todoList__completed_header ${displayCheckedTasks ? 'todoList__completed_header-active' : ''}`}
                            onClick={() => dispatch(toggleDisplayCheckedTasks())}
                            >
                            <div className="todoList__completed_header_icon">
                                <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="#000000">
                                    <path d="m7.5 4.5l-1.06 1.06 3.44 3.44-3.44 3.44 1.06 1.06 4.5-4.5z"/>
                                    <path d="m0 0h18v18h-18z" fill="none"/>
                                </svg>
                            </div>
                            <div className="todoList__completed_header_title">
                                {`${completedTasksNumber} Completed task${completedTasksNumber > 1 ? 's' : ''}`}
                            </div>
                        </div>
                        {
                            displayCheckedTasks ?
                            <ul className="todoList__list">
                                {arr.filter(({isChecked}) => isChecked === true)
                                    .map(({id , text , isChecked}) => {
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
                            : null
                        }
                    </>
                    : null
                }
            </>
        )
    }

    const checkedTasksToTheBottom = checkTasksToTheBottom(tasks);

    return (
        <div className="todoList">
            {tasks.length > 0 ? 
            tasksToBottom ? checkedTasksToTheBottom : renderedTasks
            : <NoTasks/>}
        </div>
    )
};

export default TodoList;