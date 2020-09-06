import React from 'react';
import 'antd/dist/antd.css';
import columns from './columns/columns';

import {
  Table,
} from 'antd';

/* const data = [
  {
    key: '1',
    date: '2020-07-27',
    time: '09:08',
    type: 'deadline',
    name: 'Some code practice',
    place: 'your PC',
    broadcastUrl: '',
    organizer: 'god',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '2',
    date: '2020-03-29',
    time: '09:08',
    type: 'js task',
    name: 'lodash methods',
    place: '',
    broadcastUrl: '',
    organizer: 'superman',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '3',
    date: '2021-01-01',
    time: '00:00',
    type: 'codewars',
    name: 'more practice',
    place: '',
    broadcastUrl: '',
    organizer: 'Koly',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '4',
    date: '2020-07-27',
    time: '09:08',
    type: 'deadline',
    name: 'Some code practice',
    place: 'your PC',
    broadcastUrl: '',
    organizer: 'god',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '5',
    date: '2020-03-29',
    time: '09:08',
    type: 'interview',
    name: 'lodash methods',
    place: '',
    broadcastUrl: '',
    organizer: 'superman',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '6',
    date: '2021-01-01',
    time: '00:00',
    type: 'test',
    name: 'more practice',
    place: '',
    broadcastUrl: '',
    organizer: 'Koly',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '7',
    date: '2020-07-27',
    time: '09:08',
    type: 'deadline',
    name: 'Some code practice',
    place: 'your PC',
    broadcastUrl: '',
    organizer: 'god',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '8',
    date: '2020-03-29',
    time: '09:08',
    type: 'js task',
    name: 'lodash methods',
    place: '',
    broadcastUrl: '',
    organizer: 'superman',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '9',
    date: '2021-01-01',
    time: '00:00',
    type: 'gitkolmen',
    name: 'more practice',
    place: '',
    broadcastUrl: '',
    organizer: 'Koly',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '10',
    date: '2020-07-27',
    time: '09:08',
    type: 'html task',
    name: 'Some code practice',
    place: 'your PC',
    broadcastUrl: '',
    organizer: 'god',
    detailsUrl: '',
    comment: '',
  },
  {
    key: '11',
    date: '2020-03-29',
    time: '09:08',
    type: 'js task',
    name: 'lodash methods',
    place: '',
    broadcastUrl: '',
    organizer: 'superman',
    detailsUrl: '',
    comment: '',
  },
]; */

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