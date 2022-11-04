import { useState , useRef } from 'react';
import { nanoid } from 'nanoid';

import './todoAddInput.scss';

const TodoAddInput = ({addTask}) => {

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
                        if(e.code === "Enter") {
                            addTask({id: nanoid() , text: task , isChecked: false});
                            setTask('');
                            focusOnTodoAddInput();
                        }
                    }}
                    />
            <button className="btn todoAddInput__btn"
                    onClick={(e) => {
                        addTask({id: nanoid() , text: task , isChecked: false});
                        setTask('');
                        focusOnTodoAddInput();
                    }}
                    >Add</button>
        </div>
    );
};

export default TodoAddInput;