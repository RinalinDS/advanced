import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import reducers from './reducers'
import {AuthActions} from "./reducers/auth/types";

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type RootStateType = ReturnType<typeof store.getState>


// export type AppDispatch = typeof store.dispatch
export type AppActionType = AuthActions
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AppActionType>