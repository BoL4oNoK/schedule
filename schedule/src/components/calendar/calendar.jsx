import React from 'react';
import './calendar.css';
import 'antd/dist/antd.css';
import { Calendar } from 'antd';
import calendarElement from './calendarElement';
import dateFormat from '../../utils/dateformat';

const data = [
    {
        id: '1',
        date: '27.07.2020',
        time: '09:08',
        type: 'deadline',
        name: 'Some code practice',
        place: 'your PC',
        broadcastUrl: '',
        organizer: 'god',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '2',
        date: '18.09.2020',
        time: '09:08',
        type: 'js task',
        name: 'lodash methods',
        place: '',
        broadcastUrl: '',
        organizer: 'superman',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '3',
        date: '01.01.2021',
        time: '00:00',
        type: 'codewars',
        name: 'more practice',
        place: '',
        broadcastUrl: '',
        organizer: 'Koly',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '4',
        date: '27.09.2020',
        time: '09:08',
        type: 'deadline',
        name: 'Some code practice',
        place: 'your PC',
        broadcastUrl: '',
        organizer: 'god',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '5',
        date: '05.09.2020',
        time: '09:08',
        type: 'interview',
        name: 'lodash methods',
        place: '',
        broadcastUrl: '',
        organizer: 'superman',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '6',
        date: '01.01.2021',
        time: '00:00',
        type: 'test',
        name: 'more practice',
        place: '',
        broadcastUrl: '',
        organizer: 'Koly',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '7',
        date: '27.07.2020',
        time: '09:08',
        type: 'deadline',
        name: 'Some code practice',
        place: 'your PC',
        broadcastUrl: '',
        organizer: 'god',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '8',
        date: '29.09.2020',
        time: '09:08',
        type: 'js task',
        name: 'lodash methods',
        place: '',
        broadcastUrl: '',
        organizer: 'superman',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '9',
        date: '01.01.2021',
        time: '00:00',
        type: 'gitkolmen',
        name: 'more practice',
        place: '',
        broadcastUrl: '',
        organizer: 'Koly',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '10',
        date: '27.07.2020',
        time: '09:08',
        type: 'html task',
        name: 'Some code practice',
        place: 'your PC',
        broadcastUrl: '',
        organizer: 'god',
        detailsUrl: '',
        comment: '',
    },
    {
        id: '11',
        date: '29.09.2020',
        time: '09:08',
        type: 'js task',
        name: 'lodash methods',
        place: '',
        broadcastUrl: '',
        organizer: 'superman',
        detailsUrl: '',
        comment: '',
    },
];

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
    return <Calendar 
        dateCellRender={dateCellRender}
    />;
}
