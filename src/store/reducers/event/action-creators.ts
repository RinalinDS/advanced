import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {EventAction, SetEventsAction, SetGuestsAction} from "./types";
import {AppDispatch} from "../../index";
import {UserService} from "../../../api/UserService";

export const EventActionCreators = {
    setEvents: (events: IEvent[]): SetEventsAction => ({type: EventAction.SET_EVENTS, payload: events}),
    setGuests: (guests: IUser[]): SetGuestsAction => ({type: EventAction.SET_GUESTS, payload: guests}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))

        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)
            localStorage.setItem('events', JSON.stringify(json))
            const currentUserEvents = json.filter(f => f.author === event.author || f.guest === event.author)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(f => f.author === username || f.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (e) {
            console.log(e)
        }
    },
}