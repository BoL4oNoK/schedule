
import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

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
			<Button type="primary" onClick={showModal}>
				<SettingFilled />
			</Button>
			<Modal
				title="Basic Modal"
				visible={visible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);

}
