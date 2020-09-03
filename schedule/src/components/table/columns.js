import React from 'react';
import './table.css';
import {
  Tag,
} from 'antd';

import {
  GithubOutlined
} from '@ant-design/icons';

import GIT_LINK from '../../constants/constants';

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
          let color;
          switch(el) {
            case 'deadline':
              color = 'volcano';
            break;
            case 'codewars':
              color = 'blue';
            break;
            default:
              color = 'green';
            break;
          }
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
    title: 'Place',
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
    render: (organizer) => (
      <div className='schdule-table__organizer'>
        <a className='schdule-table__organizer-link' href={`${GIT_LINK}${organizer}`}>
          <GithubOutlined />
          {organizer}
        </a>
      </div>
    ),
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