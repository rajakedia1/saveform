
function NetworkResponseReducer(state = {name: 'raja'}, action) {
    switch(action.type) {
        case 'RECEIVED_NETWORK_RESPONSE':
            return action.payload;
    }
    return state;
}

export default NetworkResponseReducer;