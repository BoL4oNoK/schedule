import React from 'react';
import { Select } from "antd";

const { Option } = Select;

export default function TimezoneSelect() {
	return (
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
	)
}
