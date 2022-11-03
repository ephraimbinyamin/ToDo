import TodoItem from "../TodoItem/TodoItem";

import NoTasks from '../NoTasks/NoTasks';

import './todoList.scss';

const TodoList = ({tasks , deleteTask}) => {
    
    const renderTodos = (arr) => {
        return (
            <ul className="todoList__list">
                {arr.map(({id , text}) => {
                    return (
                        <TodoItem 
                            key={id} 
                            text={text} 
                            isChecked={false}
                            deleteTask={() => deleteTask(id)} 
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