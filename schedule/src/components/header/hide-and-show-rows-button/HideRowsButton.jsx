import React from 'react'
import { Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_BUTTON_NAME } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';

export default function HideRowsButton() {
  const dispatch = useDispatch();
  const hightlitedRowStatus = useSelector(state => state.hightlitedRowReducer.hightlitedRowStatus);
  const hightlitedRows = useSelector(state => state.hightlitedRowReducer.hightlitedRows);
  const data = useSelector(state => state.eventsReducer.events);

  function onHideButtonClick() {
    let eventsCopy = data;
    hightlitedRows.forEach(element => {
      eventsCopy = eventsCopy.filter(el => el.id !== element.id);
    });
    dispatch(actionCreator.changeVisibleRows(eventsCopy));
    dispatch(actionCreator.changeHightlitedRowStatus(false));
    dispatch(actionCreator.saveOptions())
  } 

  return (
    <>
      {
        hightlitedRowStatus ? 
          <Button
            style={{ margin: '0 10px 0 0' }}
            type="dashed"
            onClick={onHideButtonClick}
          >
            { HIDE_BUTTON_NAME.hideRowsButtonName }
          </Button>
        : null
      }
    </>
  )
}