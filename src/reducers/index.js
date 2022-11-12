const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));

const initialState = { 
    tasks: localStorageTasks === null ? [] : localStorageTasks
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
        default:
            return state;
    }
};

export default reducer;