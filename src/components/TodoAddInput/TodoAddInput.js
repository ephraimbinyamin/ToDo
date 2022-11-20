import { useState , useRef } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addTask } from '../../actions';

import './todoAddInput.scss';

const TodoAddInput = () => {

    const dispatch = useDispatch();
    
    const [task , setTask] = useState('');

    const TodoAddInputRef = useRef(null);

	const focusOnTodoAddInput = () => {
		TodoAddInputRef.current.focus();
	}

    return (
        <div className="todoAddInput">
            <input className="todoAddInput__input" 
                    ref={TodoAddInputRef}
                    type="text" 
                    placeholder="New task"
                    onChange={(e) => setTask(e.target.value)} 
                    value={task}
                    onKeyPress={(e) => {
                        if(e.key === "Enter" && task !== '') {
                            focusOnTodoAddInput();
                            dispatch(addTask({id: nanoid() , text: task , isChecked: false}));
                            setTask('');
                        }
                    }}
                    />
            <button className="btn todoAddInput__btn"
                    onClick={() => {
                        if(task !== '') {
                            focusOnTodoAddInput();
                            dispatch(addTask({id: nanoid() , text: task , isChecked: false}));
                            setTask('');
                        }
                    }}
                    >Add</button>
        </div>
    );
};

export default TodoAddInput;