import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Typography } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { actionCreator } from '../../../store/actions';

export default function ImpairedVersion() {
  const dispatch = useDispatch();
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);

  const onChange = (e) => {
    dispatch(actionCreator.changeVersion(e));
    dispatch(actionCreator.saveOptions());
  }

	return (
		<div>
			<Switch
        checked={isImpairedVersion}
        onChange={onChange}
				checkedChildren={<EyeOutlined />}
        unCheckedChildren={<EyeInvisibleOutlined />}
			/> 	<Typography.Text>Version for the visually impaired</Typography.Text>
		</div>
	)
}
