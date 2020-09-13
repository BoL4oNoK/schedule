import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  columns,
  mentorColumn
} from './columns/columns';
import { useSelector, useDispatch } from 'react-redux';
import { USERS } from '../../constants/constants';
import { actionCreator } from '../../store/actions';

import {
  Table,
} from 'antd';

export default function TableForSchedule() {
  const dispatch = useDispatch();
  const events = useSelector(state => state.eventsReducer.events);
  const selectedColumns = useSelector(state => state.columnVisibleReducer.tableColumnsVisible);
  const userView = useSelector(state => state.userReducer.user);
  const userModalWindowVisible = useSelector(state => state.modalWindowReducer.userModalWindowVisability);

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

  function tableOnRow(record, rowIndex) {
    return {
      onClick: (event) => {
        dispatch(actionCreator.changePermanentEvent(events[rowIndex]));
        dispatch(actionCreator.changeUserModalWindowVisible(!userModalWindowVisible));
      },
    }
  } 

  return (
    <>
      <Table
        onRow={tableOnRow}
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