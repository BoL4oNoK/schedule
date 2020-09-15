import React from 'react';
import { Select, Typography } from "antd";
import { CalendarOutlined, TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../../store/actions';
import { VIEWS_FOR_SCHEDULE } from '../../../constants/constants';

const {
	table,
	calendar,
	list
} = VIEWS_FOR_SCHEDULE;

const { Option } = Select;

export default function ViewTypeSelect() {
	const dispatch = useDispatch();
	const view = useSelector(state => state.optionsReducer.viewStatus);

	const changeView = (value) => {
    dispatch(actionCreator.changeView(value));
    dispatch(actionCreator.seveOptions());
	}

	return (
		<Select
			 defaultValue={view}
			 style={{ width: 120, margin: '0 10px 0 0' }}
			 onChange={changeView}
		>
			<Option value={table}>
				<TableOutlined />  <Typography.Text>Table</Typography.Text>
			</Option>
			<Option value={list}>
				<UnorderedListOutlined />  <Typography.Text>List</Typography.Text>
			</Option>
			<Option value={calendar}>
				<CalendarOutlined />  <Typography.Text>Calendar</Typography.Text>
			</Option>
		</Select>
	)
}
