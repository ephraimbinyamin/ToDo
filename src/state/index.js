import { useReducer } from "react";

import Context from "../context";
import reducer from "../reducers";
import { add , del , toggle , edit } from "../actions";

const State = ({children}) => {

    const initialState = { tasks: [] };

    const [state , dispatch] = useReducer(reducer , initialState)

    const addTask = (task) => {
        dispatch(add(task));
    };

    const deleteTask = (id) => {
        dispatch(del(id));
    };

    const toggleCheckTask = (id) => {
        dispatch(toggle(id));
    };

    const editTask = (id , text) => {
        dispatch(edit({id , text}));
    };

    return (
        <Context.Provider value={{
            tasks: state.tasks,
            addTask , deleteTask , toggleCheckTask , editTask
        }}>
            {children}
        </Context.Provider>
    );
};

export default State;