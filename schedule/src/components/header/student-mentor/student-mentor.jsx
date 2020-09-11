import React from 'react';
import { Radio } from 'antd';
import './student-mentor.css'

export default function StudentMentorSwitch() {
	return (
		<Radio.Group
			defaultValue="a"
			buttonStyle="solid"
			className="student-mentor-switch" >
			<Radio.Button value="a">Student</Radio.Button>
			<Radio.Button value="b">Mentor</Radio.Button>
		</Radio.Group>
	)
}