import React from 'react';
import { List, Avatar, Tag} from 'antd';
import {GithubOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

 const data = [
  {
    key: '1',
    date: '2020-07-27',
    time: '09:08',
    type: 'deadline',
    name: 'Some code practice',
    place: 'your PC',
    broadcastUrl: '',
    organizer: 'kate-latushkina',
    detailsUrl: 'https://ya.ru/',
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
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
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
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
    comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
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
]; 
const selectColor = (type) => {
  let color;
  const complexTaskName = type.toString().split(' ');
  if (complexTaskName[complexTaskName.length - 1] === 'task') {
    color = 'green';
  } else {
    switch(complexTaskName[0]) {
      case 'deadline':
        color = 'volcano';
        break;
      case 'codewars':
        color = 'blue';
        break;
      case 'test':
      case 'interview':
        color = 'darkgreen';
        break;
      default:
        color = 'lightgray';
        break;
    }
  }
  return color;
}
export default function ScheduleList() {
  
  const list= <List
  itemLayout="vertical"
  size="large"
  pagination={{
    onChange: page => {
      console.log(page);
    },
    pageSize: 5,
  }}
  dataSource={data}
 
  renderItem={item => (

    <List.Item
      key={item.key}
      actions={[
        <a className='schdule-table__organizer-link' href={`https://github.com/${item.organizer}`}>
        <GithubOutlined />
        {item.organizer}
      </a>
      ]}
    
    >
      <List.Item.Meta
        avatar={<Avatar src={`https://avatars.githubusercontent.com/${item.organizer}`} />}
        title={<a href={item.detailsUrl}>{item.name}</a>}
        description={`${item.comment }`}
      />
      <div>
        <Tag  color={selectColor(item.type)}>{item.type}</Tag>
        <Tag>{item.date} {item.time}</Tag>
        <Tag>{item.place}</Tag>
        <Tag>{item.detailsUrl}</Tag>
        <Tag>{item.broadcastUrl}</Tag>
      </div>
      {(!item.type.includes('test')&&!item.type.includes('deadline'))
        ?(<div>
            <Tag  color={selectColor(item.type)}>{item.type}</Tag>
        </div>)
        :null
      }
      
    </List.Item>
  )}
/>
    return (list
     
    )
    
}
