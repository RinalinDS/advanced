import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (value: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_IS_AUTH, payload: value}),
    setIsLoading: (value: boolean): SetLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: value}),
    setError: (message: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: message}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        const {setIsLoading, setError, setUser, setIsAuth} = AuthActionCreators
        try {
            dispatch(setIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const mockUser = response.data.find(f => f.username === username && f.password === password)
                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', username)
                    dispatch(setUser(mockUser))
                    dispatch(setIsAuth(true))
                } else {
                    dispatch(setError('Wrong login or password'))
                }
            }, 1000)
        } catch (e) {
            dispatch(setError('Error happened while login'))
        } finally {
            dispatch(setIsLoading(false))
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        const {setUser, setIsAuth} = AuthActionCreators
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(setUser({} as IUser))
        dispatch(setIsAuth(false))
    },
}