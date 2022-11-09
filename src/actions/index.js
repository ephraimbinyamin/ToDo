export const add = (value) => ({ type: 'ADD_TASK' , payload: value });
export const del = (value) => ({ type: 'DELETE_TASK' , payload: value });
export const toggle = (value) => ({ type: 'TOGGLE_CHECK_TASK' , payload: value });
export const edit = (value) => ({ type: 'EDIT_TASK' , payload: value });