import React from "react";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';
let initialState = {
    initialized: false,
    globalError: null,

};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
export const initializedSucces = () => ({type: INITIALIZED_SUCCES});
export const initializeApp = () => (dispatch) => {
     let dispathResult = dispatch(getAuthUserData())
    let promise = dispatch(getAuthUserData ());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSucces ());
    })

}

export default appReducer;