import React from 'react';
import { Select, Typography } from "antd";
import { CalendarOutlined, TableOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function ViewTypeSelect() {
	return (
		<Select defaultValue="table" style={{ width: 120, margin: '0 10px 0 0' }}>
			<Option value="table">
				<TableOutlined />  <Typography.Text>Table</Typography.Text>
			</Option>
			<Option value="list">
				<UnorderedListOutlined />  <Typography.Text>List</Typography.Text>
			</Option>
			<Option value="calendar">
				<CalendarOutlined />  <Typography.Text>Calendar</Typography.Text>
			</Option>
		</Select>
	)
}
