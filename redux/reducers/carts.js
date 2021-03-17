  
import * as ActionTypes from '../actiontype';

export const carts = (state = {
    title: null,
    img: null,
    quantioty: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CARTS:
            return { 
                name: action.payload[0],
                email: action.payload[1],
                userType: action.payload[2]
            };
        default:
            return state;
    }
};