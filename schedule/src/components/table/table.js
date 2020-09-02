import React from 'react';
import 'antd/dist/antd.css';
import columns from './columns';

import {
  Table,
} from 'antd';

export default function TableForSchedule() {

  return (
    <>
      <Table columns={columns} dataSource={[]} />
    </>
  );
}