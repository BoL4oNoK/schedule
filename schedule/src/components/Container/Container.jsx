import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
import TableForSchedule from "../table/table";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import ScheduleList from "../list/ScheduleList";
import UserWindow from "../UserWindow/UserWindow";
import CalendarForSchedule from "../../components/calendar/calendar";
import ModalWindowEdit from "./../ModalWindowEdit/ModalWindowEdit";
import AddNewEventModal from "./../AddNewEventModal/AddNewEventModal";
import DonwloadButtonsContainer from "../download-buttons/DownloadButtons";

import { VIEWS_FOR_SCHEDULE } from "../../constants/constants";

const { calendar, list } = VIEWS_FOR_SCHEDULE;

const Container = () => {
  const view = useSelector((state) => state.optionsReducer.viewStatus);
  const hightlitedRowStatus = useSelector(state => state.hightlitedRowReducer.hightlitedRowStatus);
  const dispatch = useDispatch();

  const isImpairedVersion = useSelector(
    (state) => state.optionsReducer.impairedVersion
  );

  useEffect(() => {
    dispatch(actionCreator.initEvents());
    dispatch(actionCreator.initOptions());
  }, [dispatch]);

  useEffect(() => {
    if ( hightlitedRowStatus ) {
      dispatch(actionCreator.changeHightlitedRowStatus(false)); 
    } 
  }, [view])

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

      <div
        className={`${
          isImpairedVersion ? "impairedVersion" : ""
        } view-container`}
        id="schedule-view"
      >
        <Preloader />
        {changeViewForm()}
      </div>
      <UserWindow />
      <ModalWindowEdit />
      <DonwloadButtonsContainer />
      <AddNewEventModal />
    </>
  );
};

export default Container;
