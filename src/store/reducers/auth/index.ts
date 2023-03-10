import {AuthActions, AuthActionsEnum, AuthState} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ''
}

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_IS_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case AuthActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}