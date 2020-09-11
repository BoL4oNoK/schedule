import React from 'react';
import './calendar.css';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';
import calendarElement from './calendarElement';
import dateFormat from '../../utils/dateformat';
import { useSelector } from 'react-redux';

function getListData(value) {
    const textDate = dateFormat(value.year(), value.month() + 1, value.date());
    return data.filter((item) => item.date === textDate );
}

function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          calendarElement(item)
        ))}
      </ul>
    );
}

export default function CalendarForSchedule() {
    let events = useSelector(state => state.eventsReducer.events);

    return <Calendar 
        dateCellRender={dateCellRender}
    />;
}
