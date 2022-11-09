import State from "../../state";

import TodoAddInput from "../TodoAddInput/TodoAddInput";
import TodoList from "../TodoList/TodoList";
import Theme from "../Theme/Theme";

import './app.scss';

const App = () => {
    return (
        <State>
            <div className="app">
                <h1 className="app__header">To Do List</h1>
                <TodoAddInput/>
                <TodoList/>
                <Theme/>
            </div>
        </State>
    );
};

export default App;