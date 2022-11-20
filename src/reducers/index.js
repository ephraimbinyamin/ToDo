const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));
const localStorageDarkTheme = JSON.parse(localStorage.getItem('darkTheme'));
const localStorageTasksToBottom = JSON.parse(localStorage.getItem('tasksToBottom'));
const localStorageDisplayCheckedTasks = JSON.parse(localStorage.getItem('displayCheckedTasks'));

const initialState = { 
    tasks: localStorageTasks === null ? [] : localStorageTasks,
    darkTheme: localStorageDarkTheme,
    tasksToBottom: localStorageTasksToBottom,
    displayCheckedTasks: localStorageDisplayCheckedTasks === null ? true : localStorageDisplayCheckedTasks
};

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case 'ADD_TASK':
            localStorage.setItem('tasks' , JSON.stringify([...state.tasks , action.payload]));
            return {
                ...state,
                tasks: [...state.tasks , action.payload]
            }
        case 'DELETE_TASK':
            localStorage.setItem('tasks' , JSON.stringify(state.tasks.filter(item => item.id !== action.payload)));
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        case 'TOGGLE_TASK':
            localStorage.setItem('tasks' , JSON.stringify(
                state.tasks.map(item => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            isChecked: !item.isChecked
                        };
                    }
                    return item;
                })
            ));
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            isChecked: !item.isChecked
                        };
                    }
                    return item;
                })
            }
        case 'EDIT_TASK':
            localStorage.setItem('tasks' , JSON.stringify(
                state.tasks.map((item) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            text: action.payload.text
                        };
                    }
                    return item;
                })
            ));
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            text: action.payload.text
                        };
                    }
                    return item;
                })
            }
        case 'TOGGLE_THEME':
            localStorage.setItem('darkTheme' , `${!state.darkTheme}`);
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        case 'TOGGLE_TASKS_TO_BOTTOM':
            localStorage.setItem('tasksToBottom' , `${!state.tasksToBottom}`);
            return {
                ...state,
                tasksToBottom: !state.tasksToBottom
            }
        case 'TOGGLE_DISPLAY_CHECKED_TASKS':
            localStorage.setItem('displayCheckedTasks' , `${!state.displayCheckedTasks}`);
            return {
                ...state,
                displayCheckedTasks: !state.displayCheckedTasks
            }
        default:
            return state;
    }
};

export default reducer;