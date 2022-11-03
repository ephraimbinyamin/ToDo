import './todoItem.scss';

const TodoItem = () => {

    const unchecked = (
        <svg className="todoItem__checkbox_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
    );

    const checked = (
        <svg className="todoItem__checkbox_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/>
        </svg>
    );

    return (
        <li className="todoItem" tabIndex="0">
            <div className="todoItem__checkbox">
                <input type="checkbox" />
            </div>
            <div className="todoItem__text">To Do</div>
            <div className="todoItem__delete">
                <span></span>
                <span></span>
            </div>
        </li>
    );
};

export default TodoItem;