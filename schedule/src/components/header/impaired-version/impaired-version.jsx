import React from 'react'
import { Switch, Tooltip } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { IMPAIRED_SWITCH_TITLE } from '../../../constants/constants';

export default function ImpairedVersion() {
	return (
			<Tooltip
				title={ IMPAIRED_SWITCH_TITLE }
				placement='right'
			>
				<Switch
					checkedChildren={<EyeOutlined />}
					unCheckedChildren={<EyeInvisibleOutlined />}
				/>
			</Tooltip>
	);
}
