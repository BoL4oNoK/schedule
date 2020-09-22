import React from 'react'
import { Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_BUTTON_NAME } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';

export default function ShowRowsButton({ isImpairedVersion }) {
  const dispatch = useDispatch();
  const visibleRows = useSelector(state => state.optionsReducer.visibleRows);

  function onHideButtonClick() {
    dispatch(actionCreator.changeVisibleRows(null));
    dispatch(actionCreator.saveOptions());
  } 

  return (
    <Button
      type={ visibleRows ? 'primary' : 'default' }
      onClick={onHideButtonClick}
      className={isImpairedVersion ? "impairedVersion" : ""}
    >
      { HIDE_BUTTON_NAME.showRowsButtonName }
    </Button>
  );
}