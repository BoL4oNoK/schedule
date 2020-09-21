import React from 'react';
import './calendar.css';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';
import CalendarElement from './calendarElement';
import dateFormat from '../../utils/dateformat';
import { useSelector } from 'react-redux';

function getListData(value, data) {
    const textDate = dateFormat(value.year(), value.month() + 1, value.date());
    return data.filter((item) => item.currentDate === textDate );
}

function dateCellRender(value, data) {
    const listData = getListData(value, data);
    return (
      <ul className="events">
        {listData.map(item => (
          <CalendarElement key={item.eventId} event={item} data={data} />
        ))}
      </ul>
    );
}

export default function CalendarForSchedule() {
    let events = useSelector(state => state.eventsReducer.events) || [];

    return <Calendar 
        dateCellRender={(value) => dateCellRender(value, events)}
    />;
}
