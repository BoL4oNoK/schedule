import React from "react";
import "antd/dist/antd.css";
import { columns, mentorColumn } from "./columns/columns";
import { useSelector, useDispatch } from "react-redux";
import { USERS } from "../../constants/constants";
import { actionCreator } from "../../store/actions";
import confirmModal from '../confirmModal/confirmModal';

import { Table } from "antd";

function createTypesFilters(events) {
  if (!events) return [];
  let masOfTypes = [];
  events.map(el => el.type).forEach(el => {
    if (!masOfTypes.includes(el)) {
      masOfTypes.push(el)
    }
  });
  return masOfTypes.map((el) => {
    return {
      text: el,
      value: el
    };
  });
}

export default function TableForSchedule() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsReducer.events);
  const selectedColumns = useSelector((state) => state.optionsReducer.tableColumnsVisible);
  const userView = useSelector((state) => state.optionsReducer.user);
  const userModalWindowVisible = useSelector((state) => state.modalWindowReducer.userModalWindowVisability);
  const hightlitedRows = useSelector((state) => state.hightlitedRowReducer.hightlitedRows);
  const visibleRows = useSelector((state) => state.optionsReducer.visibleRows);
  const editModalWindowVisible = useSelector((state) => state.modalWindowReducer.editModalWindowVisability);

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

  rightColumns.find((col) => col.key === 'type' ).filters = createTypesFilters(events);
  
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
          const selectedEvent = (record.customEvent) ? events.find(el => el.id === record.id) : record;
          dispatch(actionCreator.changePermanentEvent(selectedEvent));
          dispatch(actionCreator.changeUserModalWindowVisible(!userModalWindowVisible));
        } else if (event.target.parentNode.classList.contains('anticon-edit') || event.target.closest('span.anticon-edit')) {
          const selectedEvent = (record.customEvent) ? events.find(el => el.id === record.id) : record;
          dispatch(actionCreator.changePermanentEvent(selectedEvent));
          dispatch(actionCreator.changeEditModalWindowVisible(!editModalWindowVisible));
        } else if (event.target.parentNode.classList.contains('anticon-delete') || event.target.closest('span.anticon-delete')) {
          const selectedEvent = (record.customEvent) ? events.find(el => el.id === record.id) : record;
          confirmModal(selectedEvent.name, () => {
            dispatch(actionCreator.deleteEvent(selectedEvent.id));
          });
        }
      },
    };
  }

  return (
    <>
      <Table
        onRow={tableOnRow}
        rowKey='eventId'
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
