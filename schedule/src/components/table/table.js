import React from 'react';
import 'antd/dist/antd.css';
import columns from './columns/columns';

import {
  Table,
} from 'antd';

export default function TableForSchedule() {

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={[] /*data*/}
        onChange={onChange}
        size='small'
        scroll={{ x: 1500 }}
        pagination={{ pageSize: 15 }}
        sticky
      />
    </>
  );
}