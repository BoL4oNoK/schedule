import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Tooltip } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { actionCreator } from '../../../store/actions';

import { IMPAIRED_SWITCH_TITLE } from '../../../constants/constants';

export default function ImpairedVersion() {
  const dispatch = useDispatch();
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);

  const onChange = (e) => {
    dispatch(actionCreator.changeVersion(e));
    dispatch(actionCreator.saveOptions());
  }

	return (
			<Tooltip
				title={ IMPAIRED_SWITCH_TITLE }
				placement='right'
			>
				<Switch
					checked={isImpairedVersion}
					onChange={onChange}
					checkedChildren={<EyeOutlined />}
					unCheckedChildren={<EyeInvisibleOutlined />}
				/>
			</Tooltip>
	);
}
