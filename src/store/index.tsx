import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
import {AuthActions} from "./reducers/auth/types";
import {EventsActionType} from "./reducers/event/types";

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))


export type RootStateType = ReturnType<typeof store.getState>


// export type AppDispatch = typeof store.dispatch
export type AppActionType = AuthActions | EventsActionType

// do useActions nado bilo tak , xz po4emu zarabotalo
// export type AppDispatch = ThunkDispatch<RootStateType, unknown, AppActionType>

// do useActions eto ne rabotalo , a posle zarabotalo
export type AppDispatch = typeof store.dispatch;