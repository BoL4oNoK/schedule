import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
import TableForSchedule from "../table/table";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import ScheduleList from "../list/ScheduleList";
import UserWindow from "../UserWindow/UserWindow";
import CalendarForSchedule from "../../components/calendar/calendar";
import CsvLink from '../csv-link/CsvLink';

import { VIEWS_FOR_SCHEDULE } from "../../constants/constants";

const { calendar, list } = VIEWS_FOR_SCHEDULE;

const Container = () => {
  const view = useSelector((state) => state.viewReducer.viewStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initEvents());
    dispatch(actionCreator.initOptions());
  });

  function changeViewForm() {
    switch (view) {
      case list:
        return <ScheduleList />;
      case calendar:
        return <CalendarForSchedule />;
      default:
        return <TableForSchedule />;
    }
  }

  return (
    <>
      <h1>Schedule</h1>
      <Header />
      <div className="view-container">
        <Preloader />
        {changeViewForm()}
      </div>
      <UserWindow />
      <CsvLink />
    </>
  );
};

export default Container;
