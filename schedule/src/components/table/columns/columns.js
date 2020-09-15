import React from 'react';
import '../table.css';
import {
  Tag,
  Button
} from 'antd';
import {
  GithubOutlined
} from '@ant-design/icons';
import { filtersForType } from './filters'; 
import { GIT_LINK, COLUMNS_TEXT } from '../../../constants/constants';
import { selectColor } from '../../../utils/selectColor';

export const columns = [
  {
    title: 'Date',
    dataIndex: 'currentDate',
    key: 'currentDate',
    className: 'column-date',
    width: 120,
    fixed: 'left',
    render: (currentDate) => (
      <>
        {currentDate.split('.').reverse().join('-')}
      </>
    ),
  },
  {
    title: 'Time',
    dataIndex: 'currentTime',
    key: 'currentTime',
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
    render: (name) => <Button type='text' className='table-event-name'>{ name }</Button>
  },
  {
    title: 'Place',
    key: 'place',
    dataIndex: 'place',
    className: 'column-place',
    width: 80,
    render: (place) => (
      <>
        {
          !place.length ? COLUMNS_TEXT.onlineStatus : <span>Offline</span>
        }
      </>
    )
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    className: 'column-description',
  },
  {
    title: 'Description URL',
    key: 'descriptionUrl',
    dataIndex: 'descriptionUrl',
    className: 'column-descriptionUrl',
    render: (descriptionUrl) => (
      <>
        <a
          href={descriptionUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          { COLUMNS_TEXT.descriptionLink }
        </a>
      </>
    )
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
              <a
                className='schdule-table__organizer-link'
                href={`${GIT_LINK}${organizer}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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
    title: 'Comment',
    key: 'comment',
    dataIndex: 'comment',
    className: 'column-comment',
    width: 100
  },
];

export const mentorColumn = {
  title: 'Action',
  key: '',
  dataIndex: 'x',
  className: 'column-action',
  width: 100,
  fixed: 'right',
  render: () =>  <Button type="dashed">{COLUMNS_TEXT.editButtonName}</Button>
}
