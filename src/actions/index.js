export const addTask = (value) => ({ type: 'ADD_TASK' , payload: value });
export const deleteTask = (value) => ({ type: 'DELETE_TASK' , payload: value });
export const toggleTask = (value) => ({ type: 'TOGGLE_TASK' , payload: value });
export const editTask = (value) => ({ type: 'EDIT_TASK' , payload: value });