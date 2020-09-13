import React from "react";
import { List, Avatar, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { GIT_AVATAR, GIT_LINK } from "../../constants/constants";
import { selectColor } from "../../utils/selectColor";
import { useSelector } from "react-redux";
import "./ScheduleList.css";
import "antd/dist/antd.css";
function dateFormatReadable(dateTime) {
  const m =
    dateTime.getMonth() + 1 < 10
      ? `0${dateTime.getMonth() + 1}`
      : dateTime.getMonth() + 1;
  const d =
    dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
  const t =
    dateTime.getHours() +
    ":" +
    (dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes());
  return `${t} ${d}.${m}.${dateTime.getFullYear()}`;
}
export default function ScheduleList() {
  const data = useSelector((state) => state.eventsReducer.events) || [];
  let arr;
  data.sort(function (a, b) {
    return new Date(a.dateTime) - new Date(b.dateTime);
  });
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
      dataSource={data || []}
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
            {
              ((arr = [
                item.type,
                dateFormatReadable(new Date(item.dateTime)),
                item.place,
                item.descriptionUrl,
              ].filter(function (el) {
                return el;
              })),
              arr.map((element, idx) =>
                element.includes("http") ? (
                  <Tag key={idx}>
                    <a href={element}>{element}</a>
                  </Tag>
                ) : (
                  <Tag color={selectColor(element)} key={idx}>
                    {element}
                  </Tag>
                )
              ))
            }
            <Tag>
              {item.currentDate} {item.currentTime}
            </Tag>
            <Tag>{item.place.length ? item.place : "online"}</Tag>
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
