import React, { useState, useEffect } from 'react';
import './calendar.css';
import 'antd/dist/antd.css';
import { Calendar, Result } from 'antd';
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
    const [viewWith, setViewWidth] = useState(true);

    useEffect(() => {
      if (document.documentElement.clientWidth < 560) {
        setViewWidth(false);
      }
    }, []);

    window.addEventListener(`resize`, event => {
      document.documentElement.clientWidth < 560 ? setViewWidth(false) : setViewWidth(true);
    }, false);

    return (
      <>
        {
          viewWith ? <Calendar
            dateCellRender={(value) => dateCellRender(value, events)}
          /> : <Result
            title="Window Size"
            subTitle="Sorry, this window size not available for calendar."
          />
        }
      </>
    );
}
