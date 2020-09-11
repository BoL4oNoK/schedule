import React from 'react';
import '../table.css';
import {
  Tag,
} from 'antd';

import {
  GithubOutlined
} from '@ant-design/icons';

import { filtersForType } from './filters'; 
import { GIT_LINK } from '../../../constants/constants';

import { selectColor } from '../../../utils/selectColor';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    className: 'column-date',
    width: 120,
    fixed: 'left'
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    className: 'column-time',
    width: 70,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    className: 'column-type',
    filters: filtersForType,
    onFilter: (value, record) => {
      return record.type.indexOf(value) === 0;
    },
    render: (type) => (
      <>
        <Tag color={selectColor(type)} key={type}>
          {type}
        </Tag>
      </>
    ),
    width: 150
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    className: 'column-name',
  },
  {
    title: 'Place',
    key: 'place',
    dataIndex: 'place',
    className: 'column-place',
  },
  {
    title: 'Broadcast URL',
    key: 'broadcastUrl',
    dataIndex: 'broadcastUrl',
    className: 'column-broadcastUrl',
  },
  {
    title: 'Organizer',
    key: 'organizer',
    dataIndex: 'organizer',
    className: 'column-organizer',
    render: (organizer) => {
      if (organizer.length) {
        return (
          <div className='schdule-table__organizer'>
              <a className='schdule-table__organizer-link' href={`${GIT_LINK}${organizer}`}>
                <GithubOutlined />
                {organizer}
              </a>
          </div>
        );
      } else {
        return null;
      }
    },
  },
  {
    title: 'Details URL',
    key: 'detailsUrl',
    dataIndex: 'detailsUrl',
    className: 'column-detailsUrl',
  },
  {
    title: 'Comment',
    key: 'comment',
    dataIndex: 'comment',
    className: 'column-comment',
  },
];

export default columns;
