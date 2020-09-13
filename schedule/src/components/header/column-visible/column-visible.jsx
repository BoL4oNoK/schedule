import React, { useState } from 'react'
import { Dropdown, Button, Checkbox, Divider } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import './column-visible.css';
import { TABLE_COLUMNS } from '../../../constants/constants';

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
const defaultCheckedList = TABLE_COLUMNS;

function Columns() {
	const [checked, setChecked] = useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(true);

	const onChange = checkedList => {
		setChecked(checkedList);
		setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
		setCheckAll(checkedList.length === plainOptions.length);
	};

	const onCheckAllChange = e => {
		setChecked(e.target.checked ? plainOptions : []);
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
				value={checked}
				onChange={onChange} />
		</div>
	);

}
