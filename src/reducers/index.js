const initialState = { tasks: [] };

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks , action.payload]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        case 'TOGGLE_TASK':
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