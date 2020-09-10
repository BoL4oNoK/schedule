import React from 'react'
import { Row, Col, Radio, Select } from "antd";
import "antd/dist/antd.css";
import { CalendarOutlined, TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import SettingsModal from './settings-modal/settings-modal';
import ColumnVisible from './column-visible/column-visible';

const { Option } = Select;

export default function Header() {
	return (
		<>
			<Row justify="space-between">
				<Col span={8}>
					<Radio.Group defaultValue="a" buttonStyle="solid">
						<Radio.Button value="a">Student</Radio.Button>
						<Radio.Button value="b">Mentor</Radio.Button>
					</Radio.Group>
				</Col>
				<Col span={8}>
					<SettingsModal />

				</Col>
			</Row>
			<Row>
				<Col span={8}>
					<Select defaultValue="table" style={{ width: 120 }}>
						<Option value="table">
							<TableOutlined />  Table
							</Option>
						<Option value="list"><UnorderedListOutlined />  List</Option>
						<Option value="calendar"><CalendarOutlined />  Calendar</Option>
					</Select>
				</Col>
				<Col span={8}>
					<Select defaultValue="minsk" style={{ width: 175 }}>
						<Option value="london">Europe/London</Option>
						<Option value="warshaw">Europe/Warshaw</Option>
						<Option value="kyiv">Europe/Kyiv</Option>
						<Option value="minsk">Europe/Minsk</Option>
						<Option value="moscow">Europe/Moscow</Option>
						<Option value="volgograd">Europe/Volgograd</Option>
						<Option value="yekaterinburg">Europe/Yekaterinburg</Option>
						<Option value="tashkent">Asia/Tashkent</Option>
						<Option value="tbilisi">Asia/Tbilisi</Option>
					</Select>
				</Col>
				<Col span={8}>
					<ColumnVisible />
				</Col>
			</Row>
		</>
	)
}