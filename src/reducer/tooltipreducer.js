function ToolTipReducer(state = {text: "", timeout: ""}, action) {
    switch(action.type) {
        case 'SHOW_TOOLTIP':
            return action.payload;
    }
    return state;
}

export default ToolTipReducer;