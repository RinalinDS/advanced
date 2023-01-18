import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import {EventCalendar} from "../components/EventCalendar";
import {EventForm} from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

export const Event: FC = () => {
    const {guests} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const onButtonClickHandler = () => setIsModalOpen(true)
    const onModalCancelHandler = () => setIsModalOpen(false)
    const addNewEvent = (event: IEvent) => {
        createEvent(event)
        setIsModalOpen(false)
    }


    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])


    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify={'center'} align={'middle'} style={{background: 'white'}}>
                <Button onClick={onButtonClickHandler}>
                    Add Event
                </Button>
                <Modal
                    title="Add Event"
                    open={isModalOpen}
                    onCancel={onModalCancelHandler}
                    footer={null}
                >
                    <EventForm guests={guests} submit={addNewEvent}/>

                </Modal>
            </Row>
        </Layout>
    );
};
