import React, {FC, useState} from 'react';
import {Button, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {DatePicker} from "antd/lib";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void
}

// можно было достать селектором guests, но для большей универсальности формы, чтобы использовать ее в другом месте, попробуем пропсы
// и сабмит можно было сделать тут , но универсальность так универсальность

export const EventForm: FC<EventFormProps> = ({guests, submit}) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    })
    const {username} = useTypedSelector(state => state.auth.user)


    const setDate = (date: any | null) => {
        if (date) setEvent({...event, date: formatDate(date?.toDate())})
    }

    const submitForm = () => {
        submit({...event, author: username})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={e => setEvent({...event, description: e.currentTarget.value})}
                />
            </Form.Item>
            <Form.Item
                label="Event date"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => setDate(date)}
                />

            </Form.Item>
            <Form.Item
                label="Choose guests"
                name="guest"
                rules={[rules.required()]}>
                <Select onChange={(guest) => setEvent({...event, guest})}
                        options={guests.map(m => ({value: m.username, label: m.username}))}
                />
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add event
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};
