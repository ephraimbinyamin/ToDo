import { useDispatch } from 'react-redux';
import { deleteTask , toggleTask , editTask } from '../../actions';

import './todoItem.scss';

const TodoItem = ({id , text , isChecked}) => {

    const dispatch = useDispatch();

    const unchecked = (
        <svg className="todoItem__btn-checkbox_icon todoItem__btn-checkbox_icon-unchecked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="3 3 18 18" fill="#000">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
    );

    const checked = (
        <svg className="todoItem__btn-checkbox_icon todoItem__btn-checkbox_icon-checked" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="3 3 18 18" fill="#000"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/>
        </svg>
    );

    return (
        <li className="todoItem">
            <div className="todoItem__btn-checkbox" tabIndex="0" onClick={() => dispatch(toggleTask(id))}>
                {isChecked ? checked : unchecked}
                <input readOnly checked={isChecked} type="checkbox" />
            </div>
            <div className={isChecked ? "todoItem__text todoItem__text-crossed" : "todoItem__text"}
                tabIndex="-1"
                contentEditable="true"
                suppressContentEditableWarning="true"
                onBlur={(e) => dispatch(editTask({id , text: e.target.textContent}))}
                >{text}</div>
            <div className="todoItem__btn-delete" tabIndex="0" onClick={() => dispatch(deleteTask(id))}>
                <span></span>
                <span></span>
            </div>
        </li>
    );
};

export default TodoItem;