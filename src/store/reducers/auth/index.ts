import {AuthActions, AuthActionsEnum, AuthState} from "./types";

const initialState: AuthState = {
    isAuth: true
}

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}