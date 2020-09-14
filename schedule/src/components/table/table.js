import React, { useEffect, useState } from 'react';
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
  const [permanentHightlitedRows, setPermanentHightlitedRows] = useState([]);
  const events = useSelector(state => state.eventsReducer.events);
  const selectedColumns = useSelector(state => state.columnVisibleReducer.tableColumnsVisible);
  const userView = useSelector(state => state.userReducer.user);
  const userModalWindowVisible = useSelector(state => state.userModalWindowReducer.userModalWindowVisability);
  const hightlitedRowStatus = useSelector(state => state.hightlitedRowReducer.hightlitedRowStatus);
  const hightlitedRows = useSelector(state => state.hightlitedRowReducer.hightlitedRows);

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
        if (event.target.parentNode.classList.contains('ant-table-row')) {
          event.target.parentNode.classList.add('row-hightlight');
          dispatch(actionCreator.changeHightlitedRowStatus(true));
          setPermanentHightlitedRows(permanentHightlitedRows.push(record));
        } else if (event.target.parentNode.classList.contains('row-hightlight')) {
          event.target.parentNode.classList.remove('row-hightlight');
          dispatch(actionCreator.changeHightlitedRowStatus(false));
          setPermanentHightlitedRows(permanentHightlitedRows.filter(el => el.id !== record.id));
        }
        console.log(permanentHightlitedRows, hightlitedRowStatus);
        //dispatch(actionCreator.changeUserModalWindowVisible(!userModalWindowVisible));
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