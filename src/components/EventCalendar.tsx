import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Dayjs} from "dayjs";
import {formatDate} from "../utils/date";

interface EventCalendarProps {
    events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({events}) => {
    const dateCellRender = (value: Dayjs) => {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = events.filter(f => f.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((m, i) =>
                    <div key={i}>
                        {m.description}
                    </div>)}
            </div>
        );
    };
    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};
