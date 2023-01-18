import {EventAction, EventsActionType, EventState} from "./types";

const initialState: EventState = {
    guests: [],
    events: [],
}

export const EventReducer = (state: EventState = initialState, action: EventsActionType):EventState => {
    switch (action.type) {
        case EventAction.SET_EVENTS:
            return {...state, events: action.payload }
        case EventAction.SET_GUESTS:
            return {...state, guests: action.payload }
        default :
            return state
    }
}