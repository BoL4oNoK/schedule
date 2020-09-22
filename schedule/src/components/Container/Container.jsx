import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
import TableForSchedule from "../table/table";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import ScheduleList from "../list/ScheduleList";
import UserWindow from "../UserWindow/UserWindow";
import CalendarForSchedule from "../../components/calendar/calendar";
import ModalWindowEdit from "./../ModalWindowEdit/ModalWindowEdit";
import DonwloadButtonsContainer from '../download-buttons/DownloadButtons';

import { VIEWS_FOR_SCHEDULE } from "../../constants/constants";

const { calendar, list } = VIEWS_FOR_SCHEDULE;

const Container = () => {
  const view = useSelector((state) => state.optionsReducer.viewStatus);
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [isFeedback, setIsFeedback] = useState(false);

  const getFeedbackState = (e) => {
    setIsFeedback(!isFeedback);
  };
=======
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);
>>>>>>> 78d5e1c688396a59eabe376e41debc71a913827c

  useEffect(() => {
    dispatch(actionCreator.initEvents());
    dispatch(actionCreator.initOptions());
  }, []);

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

      <div className={`${isImpairedVersion ? 'impairedVersion' : ''} view-container`} id="schedule-view">
        <Preloader />
        {changeViewForm()}
      </div>
      <UserWindow />
<<<<<<< HEAD
      <ModalWindowEdit getFeedbackState={getFeedbackState} />
=======
      <ModalWindowEdit />
      <DonwloadButtonsContainer />
>>>>>>> 78d5e1c688396a59eabe376e41debc71a913827c
    </>
  );
};

export default Container;
