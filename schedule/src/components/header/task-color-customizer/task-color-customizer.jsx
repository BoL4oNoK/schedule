import React from 'react';
import { Card, Select } from "antd";
import ColorSelect from "../color-picker/color-picker";
import './task-color-customizer.css'

const { Option } = Select;
const taskTypes = ['codewars', 'test', 'deadline', 'js task', 'html task', 'code jam', 'interview'];

function generateTaskOptions() {
	return taskTypes.map((task, i) => {
		return <Option key={i} className={`task-type-${task}`} value={task} >{task}</Option>
	})
}

export default function TaskColorCustomizer() {
	return (
		<Card title="Customize tasks colors" bordered={false} style={{ width: 300 }}>
			<div className="task-color-selector">
				<Select defaultValue={taskTypes[0]} style={{ width: 120 }} >
					{generateTaskOptions()}
				</Select>
				<ColorSelect taskType='background' /> <ColorSelect taskType='text' />
			</div>
		</Card>
	)
}
