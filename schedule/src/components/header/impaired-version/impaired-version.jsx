import React from 'react'
import { Switch, Typography } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function ImpairedVersion() {
	return (
		<div>
			<Switch
				checkedChildren={<EyeOutlined />}
        unCheckedChildren={<EyeInvisibleOutlined />}
			/> 	<Typography.Text>Version for the visually impaired</Typography.Text>
		</div>
	)
}
