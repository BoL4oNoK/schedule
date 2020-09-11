import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import columns from './columns/columns';
import { useSelector } from 'react-redux';

import {
  Table,
} from 'antd';

export default function TableForSchedule() {
  let events = useSelector(state => state.eventsReducer.events);
  console.log(events);

  if (events) {
    events.sort((a, b) => {
      const dateA = new Date(...a.currentDate.split('.').reverse());
      const dateB = new Date(...b.currentDate.split('.').reverse());
      return dateA - dateB;
    });
  }

  useEffect(() => {
    const rows = document.querySelectorAll('.ant-table-row').childNodes;
    console.log(rows);
    const currentDate = new Date();
    console.log(currentDate);
  });

  /*function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }*/

  return (
    <>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={events}
        //onChange={onChange}
        size='small'
        scroll={{ x: 1500 }}
        pagination={{ pageSize: 8 }}
        sticky
      />
    </>
  );
}