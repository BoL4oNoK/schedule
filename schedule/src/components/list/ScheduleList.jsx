import React from "react";
import { List, Avatar, Tag, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { GIT_AVATAR, GIT_LINK } from "../../constants/constants";
import { selectColor } from "../../utils/selectColor";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "../../store/actions";
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
  const dispatch = useDispatch();
  const modalWindowVisible = useSelector(
    (state) => state.modalWindowReducer.userModalWindowVisability
  );
  const data = useSelector((state) => state.eventsReducer.events) || [];
  const hightlitedRows = useSelector(
    (state) => state.hightlitedRowReducer.hightlitedRows
  );
  const visibleRows = useSelector((state) => state.optionsReducer.visibleRows);
  let arr;
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
      dataSource={visibleRows ? visibleRows : data}
      renderItem={(item) => (
        <List.Item
          onClick={(event) => {
            if (
              event.target.parentNode.classList.contains("ant-list-item") &&
              !event.target.parentNode.classList.contains("row-hightlight")
            ) {
              event.target.parentNode.classList.add("row-hightlight");
              dispatch(actionCreator.changeHightlitedRowStatus(true));
              dispatch(
                actionCreator.changeHightlitedRows(
                  hightlitedRows ? [...hightlitedRows, item] : [item]
                )
              );
            } else if (
              event.target.parentNode.classList.contains("row-hightlight")
            ) {
              event.target.parentNode.classList.remove("row-hightlight");
              dispatch(actionCreator.changeHightlitedRowStatus(false));
              dispatch(
                actionCreator.changeHightlitedRows(
                  hightlitedRows.filter((el) => el.id !== item.id)
                )
              );
            }
          }}
          key={item.eventId}
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
            title={
              <Button
                type="text"
                onClick={() => {
                  const selectedEvent = item.customEvent
                    ? data.find((el) => el.id === item.id)
                    : item;
                  dispatch(actionCreator.changePermanentEvent(selectedEvent));
                  dispatch(
                    actionCreator.changeUserModalWindowVisible(
                      !modalWindowVisible
                    )
                  );
                }}
              >
                {item.name}
              </Button>
            }
            description={item.comment}
          />

          <div>
            {
              ((arr = [item.type, item.place, item.descriptionUrl].filter(
                function (el) {
                  return el;
                }
              )),
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
          {item.currentDeadlineDate ? (
            <div className="optionalBlock">
              <Tag color={selectColor("deadline")}>deadline</Tag>
              <Tag>
                {item.currentDeadlineDate} {item.currentDeadlineTime}
              </Tag>
            </div>
          ) : null}
        </List.Item>
      )}
    />
  );
  return list;
}
