import React from 'react';
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
  const selectedColumns = useSelector(state => state.optionsReducer.tableColumnsVisible);
  const userView = useSelector(state => state.optionsReducer.user);
  const userModalWindowVisible = useSelector(state => state.modalWindowReducer.userModalWindowVisability);
  const hightlitedRows = useSelector(state => state.hightlitedRowReducer.hightlitedRows);
  const visibleRows = useSelector(state => state.visibleRowsReducer.visibleRows);
  
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
        if (event.target.parentNode.classList.contains('ant-table-row') && !event.target.parentNode.classList.contains('row-hightlight')) {
          event.target.parentNode.classList.add('row-hightlight');
          dispatch(actionCreator.changeHightlitedRowStatus(true));
          dispatch(actionCreator.changeHightlitedRows( hightlitedRows ? [...hightlitedRows, record] : [ record ]));
        } else if (event.target.parentNode.classList.contains('row-hightlight')) {
          event.target.parentNode.classList.remove('row-hightlight');
          dispatch(actionCreator.changeHightlitedRowStatus(false));
          dispatch(actionCreator.changeHightlitedRows(hightlitedRows.filter((el) => el.id !== record.id)));
        }
        if (event.target.classList.contains('table-event-name') || event.target.parentNode.classList.contains('table-event-name')) {
          dispatch(actionCreator.changePermanentEvent(events[rowIndex]));
          dispatch(actionCreator.changeUserModalWindowVisible(!userModalWindowVisible));
        }
      },
    }
  }

  return (
    <>
      <Table
        onRow={tableOnRow}
        rowKey='id'
        columns={ rightColumns }
        dataSource={ visibleRows ? visibleRows : events }
        size='small'
        scroll={{ x: 1400 }}
        pagination={{ pageSize: 10 }}
        sticky
      />
    </>
  );
}