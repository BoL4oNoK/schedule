
import React, { useState } from 'react'
import { Drawer, Button, Space } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import TaskColorCustomizer from '../task-color-customizer/task-color-customizer';
export default function SettingsModal() {
	const [visible, setVisible] = useState('');

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	}

	return (
		<>
			<Space style={{ float: 'right' }} >
				<Button
					onClick={showDrawer}
					className="settings-btn"
				>
					<SettingFilled />
				</Button>
			</Space>
			<Drawer
				title="Settings"
				placement="right"
				closable={true}
				onClose={onClose}
				visible={visible}
				width="320"
				bodyStyle={{ padding: "0 25px" }}
				headerStyle={{ textTransform: "uppercase" }}
			>
				<TaskColorCustomizer />
			</Drawer>
		</>
	);

}
