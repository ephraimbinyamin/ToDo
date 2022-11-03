import { useState } from 'react';
import { nanoid } from 'nanoid';

import './todoAddInput.scss';

const TodoAddInput = ({addTask}) => {

    const [task , setTask] = useState('');

    return (
        <div className="todoAddInput">
            <input className="todoAddInput__input" 
                    type="text" 
                    placeholder="New task"
                    onChange={(e) => setTask(e.target.value)} 
                    value={task}
                    />
            <button className="btn todoAddInput__btn"
                    onClick={() => {
                        addTask({id: nanoid() , text: task , isChecked: false});
                        setTask('');
                    }}
                    >Add</button>
        </div>
    );
};

export default TodoAddInput;