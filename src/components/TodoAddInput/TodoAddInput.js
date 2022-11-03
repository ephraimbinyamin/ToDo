import './todoAddInput.scss';

const TodoAddInput = () => {
    return (
        <div className="todoAddInput">
            <input className="todoAddInput__input" type="text" placeholder="New task"/>
            <button className="btn todoAddInput__btn">Add</button>
        </div>
    );
};

export default TodoAddInput;