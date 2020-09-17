import React, { useState } from 'react';
import { Divider, Select } from "antd";
import './task-color-customizer.css'
import { TASKS_TYPES } from '../../../constants/constants';
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../../store/actions';

const { Option } = Select;

export default function TaskColorCustomizer() {
	const dispatch = useDispatch();
	const color = useSelector(state => state.optionsReducer.color);
	const changeColor = (colorsObj) => {
		dispatch(actionCreator.changeColor(colorsObj));
		dispatch(actionCreator.saveOptions())
	}

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

	const [colorData, setColorData] = useState(color || {});

	function generateTaskOptions() {
		let background = '';
		let text = '';
		return TASKS_TYPES.map((task, i) => {
			if (colorData[task]) {
				const colorBg = colorData[task][1].rgb;
				const colorText = colorData[task][0].rgb;
				background = `rgba(${colorBg.r}, ${colorBg.g}, ${colorBg.b}, ${colorBg.a})`;
				text = `rgba(${colorText.r}, ${colorText.g}, ${colorText.b}, ${colorText.a})`;
			} else {
				background = '#fff'
				text = '#000'
			}
			return <Option style={{ background: background, color: text }} key={i} className={`task-type-${task}`} value={task} >{task}</Option>
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
		setColorOnChange({
			...colorOnChange,
			text: color
		})
	}

	const handleChangeCompleteText = (color) => {

		if (!colorData[current] || !colorData[current].bg) {
			setColorData({
				...colorData,
				[current]: [color, colorOnChange.bg]
			})
		} else {
			setColorData({
				...colorData,
				[current]: [color, colorData[current].bg]
			})
		}
		changeColor(colorData)
	}



	const handleChangeCompleteBg = (color) => {
		if (!colorData[current] || !colorData[current].text) {
			setColorData({
				...colorData,
				[current]: [colorOnChange.text, color]
			})
		} else {
			setColorData({
				...colorData,
				[current]: [colorData[current].text, color]
			})
		}
		changeColor(colorData)
	}

	const getCurrentColor = () => {
		let background = '';
		let text = '';
		if (colorData[current]) {

			background = colorData[current][1].rgb
			text = colorData[current][0].rgb
		} else {
			background = {
				r: 255,
				g: 255,
				b: 255,
				a: 1
			}
			text = {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			}
		}

		const backgroundColor = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`;
		const textColor = `rgba(${text.r}, ${text.g}, ${text.b}, ${text.a})`;

		return { bg: backgroundColor, text: textColor }
	}

	let currentBgColor = getCurrentColor().bg;
	let currentTextColor = getCurrentColor().text;

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
								background: currentBgColor
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
								onChangeComplete={handleChangeCompleteBg}
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
								background: currentTextColor
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
								onChangeComplete={handleChangeCompleteText}
							/>
						</div> : null}
				</div>

			</div>
			<div className="taskExample" style={{
				background: `${currentBgColor}`,
				color: `${currentTextColor}`
			}}>Task example</div>
			<Divider dashed />
		</>
	)
}
