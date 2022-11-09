import { useState , useRef , useContext } from 'react';
import { nanoid } from 'nanoid';

import Context from '../../context';

import './todoAddInput.scss';

const TodoAddInput = () => {

    const {addTask} = useContext(Context);

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
                            addTask({id: nanoid() , text: task , isChecked: false});
                            setTask('');
                            focusOnTodoAddInput();
                        }
                    }}
                    />
            <button className="btn todoAddInput__btn"
                    onClick={() => {
                        if(task !== '') {
                            addTask({id: nanoid() , text: task , isChecked: false});
                            setTask('');
                            focusOnTodoAddInput();
                        }
                    }}
                    >Add</button>
        </div>
    );
};

export default TodoAddInput;