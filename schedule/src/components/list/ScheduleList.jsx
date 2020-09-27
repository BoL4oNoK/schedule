import React from "react";
import { List, Avatar, Tag, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import {
  GIT_AVATAR,
  GIT_LINK,
  LIST_DESCRIPTION_URL_LINK_TITLE,
} from "../../constants/constants";
import { selectColor } from "../../utils/selectColor";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "../../store/actions";
import "./ScheduleList.css";
import "antd/dist/antd.css";

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

  const getPlaceAddress = (place) => {
    const placeObj = JSON.parse(place);
    const placeAddressArr = [];
    if (placeObj.town) placeAddressArr.push(placeObj.town);
    if (placeObj.streetName) placeAddressArr.push(placeObj.streetName);
    if (placeObj.buildingNbr) placeAddressArr.push(placeObj.buildingNbr);
    if (placeObj.additionalAddressInfo) placeAddressArr.push(placeObj.additionalAddressInfo);
    return placeAddressArr.join(', ').trim();
  };

  const list = (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
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

          <div className="list-main-information-container">
            <Tag color={selectColor(item.type)}>{item.type}</Tag>
            <Tag>
              {item.currentDate} {item.currentTime}
            </Tag>
            <Tag>
              {item.place.length ? getPlaceAddress(item.place) : "online"}
            </Tag>
            {item.descriptionUrl ? (
              <Tag>
                <a
                  href={item.descriptionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {LIST_DESCRIPTION_URL_LINK_TITLE}
                </a>
              </Tag>
            ) : null}
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
