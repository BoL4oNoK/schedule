import React, { createFactory } from 'react'
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { useSelector } from 'react-redux';
import SettingsModal from './settings-modal/settings-modal';
import ColumnVisible from './column-visible/column-visible';
import StudentMentorSwitch from './student-mentor/student-mentor';
import ImpairedVersion from './impaired-version/impaired-version';
import TimezoneSelect from './timezone-select/timezone-select';
import ViewTypeSelect from './view-type-select/view-type-select';

import {
	VIEWS_FOR_SCHEDULE,
} from '../../constants/constants';

export default function Header() {
	const view = useSelector(state => state.viewReducer.viewStatus);

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
				{
					view === VIEWS_FOR_SCHEDULE.table ? <Col span={8}>
					<ColumnVisible />
				</Col> : null
				}
			</Row>
		</>
	)
}