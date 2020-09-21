import React, { useState } from 'react'
import { Dropdown, Button, Checkbox, Divider } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import './column-visible.css';
import { TABLE_COLUMNS } from '../../../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from '../../../store/actions';

const CheckboxGroup = Checkbox.Group;

export default function ColumnVisible() {
	const [visible, setVisible] = useState('');
	const handleVisibleChange = flag => {
		setVisible(flag);
	};

	const icon = visible ? <CaretUpOutlined /> : <CaretDownOutlined />;

	return (
		<>
			<Dropdown
				overlay={<Columns />}
				trigger={['click']}
				onVisibleChange={handleVisibleChange}
				visible={visible}
			>
				<Button style={{ float: 'right' }}>
					{icon} Columns
				</Button>

			</Dropdown>
		</>
	);
}

const plainOptions = TABLE_COLUMNS;

function Columns() {
	const checkList = useSelector(state => state.optionsReducer.tableColumnsVisible);
	const dispatch = useDispatch();
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(true);

	const onChange = checkedList => {
		dispatch(actionCreator.changeColumnsVisible(checkedList))
		dispatch(actionCreator.saveOptions());
		setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
		setCheckAll(checkedList.length === plainOptions.length);
	};

	const onCheckAllChange = e => {
		dispatch(actionCreator.changeColumnsVisible(e.target.checked ? plainOptions : []))
		dispatch(actionCreator.saveOptions());
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	return (
		<div className="columns-visible-dropdown">
			<div className="site-checkbox-all-wrapper">
				<Checkbox
					indeterminate={indeterminate}
					onChange={onCheckAllChange}
					checked={checkAll}>
					Check all
        </Checkbox>
			</div>
			<Divider style={{ margin: '3px 0' }} />
			<CheckboxGroup
				className="columns-checkbox"
				options={plainOptions}
				value={checkList}
				onChange={onChange} />
		</div>
	);

}
