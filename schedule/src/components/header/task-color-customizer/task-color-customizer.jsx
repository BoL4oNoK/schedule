import React, { useState } from 'react';
import { Divider, Select } from "antd";
import './task-color-customizer.css'
import { TASKS_TYPES } from '../../../constants/constants';
import { SketchPicker } from 'react-color';

const { Option } = Select;

export default function TaskColorCustomizer() {

	const [current, setCurrent] = useState(TASKS_TYPES[0]);
	const [displayColorPicker, setDisplayColorPicker] = useState({ text: false, bg: false });
	const [colorOnChange, setColorOnChange] = useState({
		bg: {
			hex: '#fff',
			rgb: {
				r: 255,
				g: 255,
				b: 255,
				a: 1
			}
		},
		text: {
			hex: '#000',
			rgb: {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			}
		}
	})

	function generateTaskOptions() {
		return TASKS_TYPES.map((task, i) => {
			return <Option style={{ background: 'black' }} key={i} className={`task-type-${task}`} value={task} >{task}</Option>
		})
	}

	const handleChange = (value) => {
		setCurrent(value)
	}

	const handleClickText = () => {
		setDisplayColorPicker({
			...displayColorPicker,
			text: !displayColorPicker.text
		})
	};

	const handleCloseText = () => {
		setDisplayColorPicker({
			...displayColorPicker,
			text: false
		})
	};


	const handleClickBg = () => {
		setDisplayColorPicker({
			...displayColorPicker,
			bg: !displayColorPicker.bg
		})
	};

	const handleCloseBg = () => {
		setDisplayColorPicker({
			...displayColorPicker,
			bg: false
		})
	};

	const handleChangeBg = (color) => {
		setColorOnChange({
			...colorOnChange,
			bg: color
		})
	}

	const handleChangeText = (color) => {
		console.log(color);
		setColorOnChange({
			...colorOnChange,
			text: color
		})
	}


	return (
		<>
			<Divider
				dashed={true}
				orientation="left">Task color</Divider>
			<div className="task-color-selector">
				<div className="color-select-container"><span>Task type: </span>
					<Select
						defaultValue={current}
						style={{ width: 143 }}
						onChange={handleChange} >
						{generateTaskOptions()}
					</Select>
				</div>
				<div className="color-select-container">
					<span>Background color: </span>
					<div className="swatch"
						onClick={handleClickBg}
					>
						<div
							className="task-type-color color"
							style={{
								background: colorOnChange.bg.hex,
								opacity: colorOnChange.bg.rgb.a
							}}
						></div>
					</div>
					{displayColorPicker.bg ?
						<div className="popover">
							<div className="cover" onClick={handleCloseBg} />
							<SketchPicker
								style={{ height: 'auto' }}
								presetColors={[]}
								color={colorOnChange.bg.rgb}
								onChange={handleChangeBg}
							/>
						</div> : null}
				</div>
				<div className="color-select-container">
					<span>Text color: </span>
					<div className="swatch"
						onClick={handleClickText}>
						<div
							className="task-type-color color"
							style={{
								background: colorOnChange.text.hex,
								opacity: colorOnChange.text.rgb.a
							}}
						></div>
					</div>
					{displayColorPicker.text ?
						<div className="popover">
							<div className="cover" onClick={handleCloseText} />
							<SketchPicker
								style={{ height: 'auto' }}
								presetColors={[]}
								color={colorOnChange.text.rgb}
								onChange={handleChangeText}
							/>
						</div> : null}
				</div>

			</div>
		</>
	)
}
