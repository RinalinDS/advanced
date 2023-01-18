import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
    guests: IUser[];
    events: IEvent[];
}

export enum EventAction {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
    type: EventAction.SET_GUESTS;
    payload: IUser[];
}

export interface SetEventsAction {
    type: EventAction.SET_EVENTS;
    payload: IEvent[];
}

export type EventsActionType = SetGuestsAction | SetEventsAction