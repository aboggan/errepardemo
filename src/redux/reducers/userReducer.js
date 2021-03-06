import { ActionTypes } from "../constants/action-types";

const initialState = [];

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return {...state, user: payload};
        default:
            return state
    }
}