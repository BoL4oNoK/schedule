import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Typography } from "antd";
import './color-picker.css';

const { Text } = Typography;

export default function ColorSelect(props) {
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const [color, setColor] = useState({
		r: '241',
		g: '112',
		b: '19',
		a: '1',
	});

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker)
	};

	const handleClose = () => {
		setDisplayColorPicker(false)
	};

	const handleChange = (color) => {
		setColor(color.rgb)
	};

	const styles = {
		color: {
			width: '70px',
			height: '26px',
			margin: '2px',
			borderRadius: '2px',
			background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
		},
		swatch: {
			marginLeft: '10px',
			background: '#fff',
			border: '1px solid #d9d9d9',
			borderRadius: '2px',
			cursor: 'pointer',
		},
		popover: {
			position: 'absolute',
			zIndex: '2',
		},
		cover: {
			position: 'fixed',
			top: '0px',
			right: '0px',
			bottom: '0px',
			left: '0px',
		},
	}

	return (
		<div>
			<div style={styles.swatch} onClick={handleClick}>
				<div className="task-type-color" style={styles.color} ><Text className="task-type-text">{props.taskType}</Text></div>
			</div>
			{ displayColorPicker ? <div style={styles.popover}>
				<div style={styles.cover} onClick={handleClose} />
				<SketchPicker color={color} onChange={handleChange} />
			</div> : null}

		</div>
	);
}