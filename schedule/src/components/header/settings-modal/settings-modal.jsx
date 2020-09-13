
import React, { useState } from 'react'
import { Modal, Button, Space } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import TaskColorCustomizer from '../task-color-customizer/task-color-customizer';
export default function SettingsModal() {
	const [visible, setVisible] = useState('');

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = e => {
		setVisible(false);
	};

	const handleCancel = e => {
		setVisible(false);
	};

	return (
		<>
			<Space style={{ float: 'right' }} >
				<Button
					onClick={showModal}
					className="settings-btn"
				>
					<SettingFilled />
				</Button>
			</Space>
			<Modal
				visible={visible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<TaskColorCustomizer />
			</Modal>
		</>
	);

}
