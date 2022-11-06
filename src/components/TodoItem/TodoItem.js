import { useState , useRef } from 'react';

import './todoItem.scss';

const TodoItem = ({id , todoNum , text , isChecked , editTask , deleteTask , toggleCheckTask}) => {

    const todoItemTextClassNames = isChecked ? "task todoItem__task_text todoItem__task_text-crossed" : "task todoItem__task_text";
    
    const [editField , setEditField] = useState('');

    const TodoItemRef = useRef(null);

	const focusOnTodoItemInput = () => {
		TodoItemRef.current.focus();
	}

    const showEdit = () => {
        const tasks = document.querySelectorAll(".todoItem__task");
        const edits = document.querySelectorAll(".todoItem__edit");

        tasks.forEach((item , i) => {
            if(i === todoNum) {
                tasks[i].style.display = "none";
                edits[i].style.display = "block";
            }
            else {
                tasks[i].style.display = "block";
                edits[i].style.display = "none";
            }
        })
    };

    const showTask = () => {
        const tasks = document.querySelectorAll(".todoItem__task");
        const edits = document.querySelectorAll(".todoItem__edit");

        tasks[todoNum].style.display = "block";
        edits[todoNum].style.display = "none";
    };

    const closeEdit = (e) => {
        const tasks = document.querySelectorAll(".todoItem__task");
        const edits = document.querySelectorAll(".todoItem__edit");

        if(e.target.classList.contains('task')) {
            tasks.forEach((item , i) => {
                tasks[i].style.display = "block";
                edits[i].style.display = "none";
            })
        }
    }

    const unchecked = (
        <svg className="todoItem__task_btn-checkbox_icon todoItem__task_btn-checkbox_icon-unchecked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
    );

    const checked = (
        <svg className="todoItem__task_btn-checkbox_icon todoItem__task_btn-checkbox_icon-checked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/>
        </svg>
    );

    return (
        <li className="todoItem">
            <div className="task todoItem__task" tabIndex="0"
                onClick={closeEdit}>
                <div className="task todoItem__task_btn-checkbox" onClick={toggleCheckTask}>
                    {isChecked ? checked : unchecked}
                    <input readOnly checked={isChecked} type="checkbox" />
                </div>
                <div className={todoItemTextClassNames}>{text}</div>
                <div className="task todoItem__task_btn-edit" 
                        onClick={() => {
                            setEditField(text);
                            showEdit();
                            focusOnTodoItemInput();
                        }}>
                <svg xmlns="http://www.w3.org/2000/svg" weight="16" height="16" viewBox="1 1 13 13">
                    <path d="M 12.205078 1.0039062 C 11.87855 1.0059962 11.553783 1.1310493 11.310547 1.3808594 L 6.6464844 6.1230469 L 5.9511719 9.0488281 L 8.8769531 8.3535156 L 8.9746094 8.2558594 L 13.619141 3.6894531 C 14.118761 3.2029808 14.12374 2.3874144 13.630859 1.8945312 L 13.105469 1.3691406 C 12.859027 1.1226991 12.531606 1.0018122 12.205078 1.0039062 z M 12.210938 1.9960938 C 12.277619 1.9957637 12.344879 2.0226118 12.398438 2.0761719 L 12.923828 2.6015625 C 13.030945 2.7086795 13.030302 2.8690817 12.921875 2.9746094 L 12.919922 2.9746094 L 8.3769531 7.4433594 L 7.2988281 7.7011719 L 7.5546875 6.6269531 L 12.025391 2.0800781 L 12.025391 2.078125 C 12.078154 2.0239351 12.144256 1.9964238 12.210938 1.9960938 z M 3 2 C 1.895 2 1 2.895 1 4 L 1 12 C 1 13.105 1.895 14 3 14 L 11 14 C 12.105 14 13 13.105 13 12 L 13 5.703125 L 12 6.6855469 L 12 12 C 12 12.552 11.552 13 11 13 L 3 13 C 2.448 13 2 12.552 2 12 L 2 4 C 2 3.448 2.448 3 3 3 L 8.3183594 3 L 9.3027344 2 L 3 2 z"/>
                </svg>
                </div>
                <div className="task todoItem__task_btn-delete" onClick={deleteTask}>
                    <span className="task"></span>
                    <span className="task"></span>
                </div>
            </div>
            <div className="todoItem__edit">
                <input 
                        type="text" 
                        className="todoItem__edit_field" 
                        ref={TodoItemRef} value={editField} 
                        onChange={(e) => setEditField(e.target.value)} 
                        onKeyPress={(e) => {
                            if(e.key === "Enter") {
                                editTask(id , editField);
                                setEditField('');
                                showTask();
                            }
                        }}
                />
                <div className="todoItem__edit_btn-save" 
                        onClick={() => {
                            editTask(id , editField);
                            setEditField('');
                            showTask();
                        }}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 305.002 305.002" >
                        <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5
                            S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5
                            c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/>
                        <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678
                            l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385
                            c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/>
                    </svg>
                </div>
            </div>
        </li>
    );
};

export default TodoItem;