import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import { USERS } from '../../../constants/constants';
import { actionCreator } from '../../../store/actions';
import './student-mentor.css'

export default function StudentMentorSwitch() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  const onClick = (e) => {
    dispatch(actionCreator.changeUser(e.target.value));
  }
	return (
		<Radio.Group
			defaultValue={user}
			buttonStyle="solid"
			className="student-mentor-switch" >
        { Object.values(USERS).map(item => <Radio.Button value={item} key={item} onClick={onClick}>{item}</Radio.Button>) }
		</Radio.Group>
	)
}