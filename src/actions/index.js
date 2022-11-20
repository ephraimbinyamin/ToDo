export const addTask = (value) => ({ type: 'ADD_TASK' , payload: value });
export const deleteTask = (value) => ({ type: 'DELETE_TASK' , payload: value });
export const toggleTask = (value) => ({ type: 'TOGGLE_TASK' , payload: value });
export const editTask = (value) => ({ type: 'EDIT_TASK' , payload: value });

export const toggleTheme = () => ({ type: 'TOGGLE_THEME' });
export const toggleTaksToBottom = () => ({ type: 'TOGGLE_TASKS_TO_BOTTOM' });
export const toggleDisplayCheckedTasks = () => ({ type: 'TOGGLE_DISPLAY_CHECKED_TASKS' });