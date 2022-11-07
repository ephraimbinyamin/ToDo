import TodoItem from "../TodoItem/TodoItem";

import NoTasks from "../NoTasks/NoTasks";

import './todoList.scss';

const TodoList = ({tasks , editTask , deleteTask , toggleCheckTask}) => {

    const renderTodos = (arr) => {
        return (
            <ul className="todoList__list">
                {arr.map(({id , text , isChecked} , i) => {
                    return (
                        <TodoItem 
                            key={id} 
                            id={id}
                            todoNum={i}
                            text={text} 
                            isChecked={isChecked} 
                            editTask={editTask}
                            deleteTask={() => deleteTask(id)} 
                            toggleCheckTask={() => toggleCheckTask(id)} 
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