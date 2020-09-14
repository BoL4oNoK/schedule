import React from 'react';
import 'antd/dist/antd.css';
import { Badge } from 'antd';
import { selectColor } from '../../utils/selectColor';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../store/actions';

export default function CalendarElement (event) {
  const dispatch = useDispatch();
  const modalWindowVisible = useSelector((state) => state.modalWindowReducer.userModalWindowVisability);
  const badgeColor = selectColor(event.type);
  const badgeText = `${event.currentTime} ${event.name}`;
  const badgeTitle = `${event.type.toUpperCase()}: ${event.name}`;
  return (
    <li
      key={event.id}
      className="events__item"
      title={badgeTitle}
      onClick={() => {
        dispatch(actionCreator.changePermanentEvent(event));
        dispatch(actionCreator.changeUserModalWindowVisible(!modalWindowVisible));
      }}
    >
      <Badge color={badgeColor} text={badgeText} />
    </li>
  );
}
