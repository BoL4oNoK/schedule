import React, { useState, useEffect } from 'react';
import './calendar.css';
import 'antd/dist/antd.css';
import { Calendar, Result } from 'antd';
import CalendarElement from './calendarElement';
import dateFormat from '../../utils/dateformat';
import { useSelector } from 'react-redux';
import { CALENDAR_VIEW_LIMITS } from '../../constants/constants';

const {
  warningTitle,
  warningDescription,
  widthLimit,
} = CALENDAR_VIEW_LIMITS;

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

    function windowResizeHandler() {
      document.documentElement.clientWidth < widthLimit ? setViewWidth(false) : setViewWidth(true);
    }

    useEffect(() => {
      if (document.documentElement.clientWidth < widthLimit) {
        setViewWidth(false);
      }
      window.addEventListener('resize', windowResizeHandler, false);
      return () => window.removeEventListener('resize', windowResizeHandler);
    }, []);

    return (
      <>
        {
          viewWith ? <Calendar
            dateCellRender={(value) => dateCellRender(value, events)}
          /> : <Result
            title={ warningTitle }
            subTitle={ warningDescription }
          />
        }
      </>
    );
}
