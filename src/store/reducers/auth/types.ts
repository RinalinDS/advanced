import {IUser} from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean
    user: IUser
    isLoading: boolean
    error: string
}

export enum AuthActionsEnum {
    SET_IS_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_LOADING'
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_IS_AUTH;
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string
}

export interface SetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: IUser
}

export interface SetLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean
}


export type AuthActions =
    SetAuthAction |
    SetErrorAction |
    SetUserAction |
    SetLoadingAction