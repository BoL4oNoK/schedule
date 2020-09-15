import React from 'react';
import { Divider, Select } from "antd";
import ColorSelect from "../color-picker/color-picker";
import './task-color-customizer.css'
import { TASKS_TYPES } from '../../../constants/constants';

const { Option } = Select;

function generateTaskOptions() {
	return TASKS_TYPES.map((task, i) => {
		return <Option key={i} className={`task-type-${task}`} value={task} >{task}</Option>
	})
}

export default function TaskColorCustomizer() {
	return (
		<>
			<Divider
				dashed={true}
				orientation="left">Task color</Divider>
			<div className="task-color-selector">
				<div className="color-select-container"><span>Task type: </span>
					<Select defaultValue={TASKS_TYPES[0]} style={{ width: 143 }} >
						{generateTaskOptions()}
					</Select>
				</div>
				<div className="color-select-container"><span>Background color: </span><ColorSelect /></div>
				<div className="color-select-container"><span>Text color: </span><ColorSelect /></div>

			</div>
		</>
	)
}
