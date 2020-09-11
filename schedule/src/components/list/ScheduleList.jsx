import React from "react";
import { List, Avatar, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { GIT_AVATAR, GIT_LINK } from "../../constants/constants";
import "./ScheduleList.css";
import "antd/dist/antd.css";

import { useSelector } from 'react-redux';
import { selectColor } from '../../utils/selectColor';

export default function ScheduleList() {
  let events = useSelector(state => state.eventsReducer.events);

  const list = (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={events}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <a
              className="schdule-table__organizer-link"
              href={`${GIT_LINK}${item.organizer}`}
            >
              <GithubOutlined />
              {item.organizer}
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={`${GIT_AVATAR}${item.organizer}`} />}
            title={<a href={item.descriptionUrl}>{item.name}</a>}
            description={item.comment}
          />
          <div>
            <Tag color={selectColor(item.type)}>{item.type}</Tag>
            <Tag>
              {item.currentDate} {item.currentTime}
            </Tag>
            <Tag>{item.place.length ? item.place : 'online'}</Tag>
            <Tag>{}</Tag>
            <Tag>{}</Tag>
          </div>
          {!item.type.includes("test") && !item.type.includes("deadline") ? (
            <div className="optionalBlock">
              <Tag color={selectColor(item.type)}>{item.type}</Tag>
            </div>
          ) : null}
        </List.Item>
      )}
    />
  );
  return list;
}
