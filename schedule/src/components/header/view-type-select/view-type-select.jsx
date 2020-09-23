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
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);

	const changeView = (value) => {
    dispatch(actionCreator.changeView(value));
    dispatch(actionCreator.saveOptions());
	}

	return (
		<Select
			 value={view}
			 style={{ width: isImpairedVersion ? 135 : 120, margin: '0 10px 0 0' }}
			 onChange={changeView}
		>
			<Option value={table} style={{ fontSize: isImpairedVersion ? "18px" : "14px" }}>
				<TableOutlined />  <Typography.Text>Table</Typography.Text>
			</Option>
			<Option value={list} style={{ fontSize: isImpairedVersion ? "18px" : "14px" }}>
				<UnorderedListOutlined />  <Typography.Text>List</Typography.Text>
			</Option>
			<Option value={calendar} style={{ fontSize: isImpairedVersion ? "18px" : "14px" }}>
				<CalendarOutlined />  <Typography.Text>Calendar</Typography.Text>
			</Option>
		</Select>
	)
}
