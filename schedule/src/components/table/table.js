import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  columns,
  mentorColumn
} from './columns/columns';
import { useSelector } from 'react-redux';
import { USERS } from '../../constants/constants';

import {
  Table,
} from 'antd';

export default function TableForSchedule() {
  const events = useSelector(state => state.eventsReducer.events);
  const selectedColumns = useSelector(state => state.columnVisibleReducer.tableColumnsVisible);
  const userView = useSelector(state => state.userReducer.user);

  let rightColumns = selectedColumns.map((type) => {
    return columns.map(el => {
      if (el.key.toLowerCase().includes(type.toLowerCase())) {
        return el;
      } else {
        return null;
      }
    }).find(el => el);
  });

  if ( userView === USERS.mentor ) {
    rightColumns.push(mentorColumn) 
  }

  return (
    <>
      <Table
        rowKey='id'
        columns={ rightColumns }
        dataSource={events}
        size='small'
        scroll={{ x: 1400 }}
        pagination={{ pageSize: 10 }}
        sticky
      />
    </>
  );
}