import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../store/actions";
import TableForSchedule from "../table/table";
import ScheduleList from "../list/ScheduleList";

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initEvents());
    dispatch(actionCreator.initOptions());
  });

  return (
    <>
      <h1>Schedule</h1>
      <TableForSchedule />
      <ScheduleList />
    </>
  );
};

export default Container;
