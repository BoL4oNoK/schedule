import React from 'react';
import {
  Tag,
} from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type) => (
      <>
        {type.map((el) => {
          let color = el === 'deadline' ? 'volcano' : 'green';
          return (
            <Tag color={color} key={el}>
              {el}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'place',
    key: 'place',
    dataIndex: 'place',
  },
  {
    title: 'Broadcast URL',
    key: 'broadcastUrl',
    dataIndex: 'broadcastUrl',
  },
  {
    title: 'Organizer',
    key: 'organizer',
    dataIndex: 'organizer',
  },
  {
    title: 'Details URL',
    key: 'detailsUrl',
    dataIndex: 'detailsUrl',
  },
  {
    title: 'Comment',
    key: 'comment',
    dataIndex: 'comment',
  },
];

export default columns;