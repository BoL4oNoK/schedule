import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from "antd";
import { TIME_ZONES } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';

const { Option } = Select;

export default function TimezoneSelect() {
  const timeZone = useSelector(state => state.optionsReducer.timeZone);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actionCreator.setTimeZone(e));
    dispatch(actionCreator.saveOptions());
  }

	return (
    <Select
      value={timeZone}
      style={{ width: 170 }}
      onChange={onChange}
    >
      { TIME_ZONES.map(zone => <Option value={zone.name} key={zone.name}>{zone.name}</Option>) }
		</Select>
	);
}
