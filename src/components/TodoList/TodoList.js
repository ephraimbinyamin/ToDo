import TodoItem from "../TodoItem/TodoItem";

import NoTasks from "../NoTasks/NoTasks";

import './todoList.scss';

const TodoList = ({tasks , deleteTask , toggleCheckTask}) => {

    const renderTodos = (arr) => {
        return (
            <ul className="todoList__list">
                {arr.map(({id , text , isChecked}) => {
                    return (
                        <TodoItem 
                            key={id} 
                            text={text} 
                            isChecked={isChecked} 
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
    );
};

export default TodoList;