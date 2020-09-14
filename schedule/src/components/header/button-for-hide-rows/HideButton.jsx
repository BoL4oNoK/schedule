import React from 'react'
import { Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_BUTTON_NAME } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';

export default function HideButton() {
  const dispatch = useDispatch();
  const hightlitedRowStatus = useSelector(state => state.hightlitedRowReducer.hightlitedRowStatus);
  const hightlitedRows = useSelector(state => state.hightlitedRowReducer.hightlitedRows);
  const data = useSelector(state => state.eventsReducer.events);

  function onHideButtonClick() {
    let eventsCopy = data;
    hightlitedRows.forEach(element => {
      eventsCopy = eventsCopy.filter(el => el.id !== element.id);
    });
    dispatch(actionCreator.changeVisibleRow(eventsCopy));
    dispatch(actionCreator.changeHightlitedRowStatus(false));
  } 

  return (
    <>
      {
        hightlitedRowStatus ? 
          <Button
            type="dashed"
            onClick={onHideButtonClick}
          >
            { HIDE_BUTTON_NAME }
          </Button>
        : null
      }
    </>
  )
}