import React, { createFactory } from 'react'
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import { useSelector } from 'react-redux';
import SettingsModal from './settings-modal/settings-modal';
import ColumnVisible from './column-visible/column-visible';
import StudentMentorSwitch from './student-mentor/student-mentor';
import ImpairedVersion from './impaired-version/impaired-version';
import TimezoneSelect from './timezone-select/timezone-select';
import ViewTypeSelect from './view-type-select/view-type-select';

import {
	USERS,
	VIEWS_FOR_SCHEDULE,
	ADD_NEW_EVENT_BUTTON_NAME
} from '../../constants/constants';

export default function Header() {
	const view = useSelector(state => state.optionsReducer.viewStatus);
	const user = useSelector(state => state.optionsReducer.user);

	return (
		<>
			<Row justify="space-between">
				<Col span={8}>
					<ImpairedVersion />
				</Col>
				<Col span={8} style={{ float: 'right' }}>
					<SettingsModal />
					<StudentMentorSwitch />
				</Col>
			</Row>
			<Row style={{ padding: '10px 0' }}>
				<Col span={16}>
					<ViewTypeSelect />
					<TimezoneSelect />
				</Col>
				<Col span={8}>
					{ view === VIEWS_FOR_SCHEDULE.table ? <ColumnVisible /> : null }
					{ user === USERS.mentor ?  <Button type="primary" ghost> { ADD_NEW_EVENT_BUTTON_NAME } </Button> : null }
				</Col>
			</Row>
		</>
	)
}