import React, { useState } from "react";
import { Row, Col, Select, Input, Checkbox, DatePicker, Modal } from "antd";
import "antd/dist/antd.css";
import "./ModalWindow.scss";
import {
  MENTOR_MODAL,
  TASKS_TYPES,
  TIME_ZONES,
  userModal,
} from "./../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
import moment from "moment";
import { getTasks, getTimeZones } from "./../../utils/editWindowUtils";
import OfflineComponent from "./OfflineComponent";

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// Edit modal window component

const ModalWindowEdit = () => {
  const { DATE_FORMAT } = userModal;
  const dispatch = useDispatch();

  const [stateEditWindow, setStateEditWindow] = useState({
    taskName: "",
    typeName: "",
    taskDescription: "",
    timeZone: "",
    dateGiven: "",
    dateDeadline: "",
    taskUrl: "",
    feedBackCheckBox: false,
    isOline: true,
  });

  const visible = useSelector(
    (state) => state.modalWindowReducer.editModalWindowVisability
  );
  const permanentEvent = useSelector((state) => {
    return state.permanentEventReducer.permanentEvent;
  });

  const handleCancel = () => {
    dispatch(actionCreator.changeEditModalWindowVisible(!visible));
  };

  const onEventLocationChange = (e) => {
    if (e === "online") {
      setStateEditWindow({
        ...stateEditWindow,
        isOnline: false,
      });
    } else {
      setStateEditWindow({
        ...stateEditWindow,
        isOnline: true,
      });
    }
  };

  const onEventChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      [e.target.getAttribute("attr")]: e.target.value,
    });
  };

  const onSelectTypeChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      typeName: e,
    });
  };

  const onTimeZoneChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      timeZone: e,
    });
  };

  const onCheckboxChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      feedBackCheckBox: e.target.checked,
    });
  };

  const onDateChange = (e) => {
    console.log(e);
  };

  if (permanentEvent) {
    console.log(permanentEvent);
    return (
      <Modal visible={visible} onCancel={handleCancel}>
        <h2
          className="wrapper-modal-edit__header"
          style={{ fontWeight: "300" }}
        >
          Edit task
        </h2>

        <Row gutter={16} style={{ marginTop: "1rem" }}>
          <Col span={6} style={{ marginLeft: "2rem" }}>
            <Input
              placeholder="Task Name"
              attr="taskName"
              value={
                stateEditWindow.taskName
                  ? stateEditWindow.taskName
                  : permanentEvent.name
              }
              onChange={onEventChange}
            />
          </Col>
          <Col span={6}>
            <Select
              style={{ width: 200 }}
              value={
                stateEditWindow.typeName
                  ? stateEditWindow.typeName
                  : permanentEvent.type
              }
              onChange={onSelectTypeChange}
            >
              <OptGroup label="TaskTitle">{getTasks(TASKS_TYPES)}</OptGroup>
            </Select>
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <TextArea
            rows={5}
            placeholder="Task Description"
            attr="taskDescription"
            value={
              stateEditWindow.taskDescription
                ? stateEditWindow.taskDescription
                : permanentEvent.description
            }
            onChange={onEventChange}
          />
        </Col>

        <Row style={{ marginTop: "1rem" }}>
          <Col span={8} style={{ marginLeft: "2rem" }}>
            <Select
              style={{ width: 200 }}
              value={
                stateEditWindow.timeZone
                  ? stateEditWindow.timeZone
                  : permanentEvent.timeZone
              }
              onChange={onTimeZoneChange}
            >
              <OptGroup label="Timezones">{getTimeZones(TIME_ZONES)}</OptGroup>
            </Select>
          </Col>
          <Col span={14}>
            <RangePicker
              style={{ marginLeft: "2rem" }}
              showTime={{
                hideDisabledOptions: true,
              }}
              format={DATE_FORMAT}
              value={[
                moment(
                  permanentEvent.currentDate + " " + permanentEvent.currentTime,
                  DATE_FORMAT
                ),
                !permanentEvent.deadlineDateTime
                  ? ""
                  : moment(
                      `${permanentEvent.currentDeadlineDate} ${permanentEvent.currentDeadlineTime}`,
                      DATE_FORMAT
                    ),
              ]}
              onChange={onDateChange}
            />
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Input
            placeholder="Additional url"
            attr="taskUrl"
            value={
              stateEditWindow.taskUrl
                ? stateEditWindow.taskUrl
                : permanentEvent.descriptionUrl
            }
            onChange={onEventChange}
          />
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Checkbox
            onChange={onCheckboxChange}
            checked={stateEditWindow.feedBackCheckBox}
          >
            Checkbox for feedback
          </Checkbox>
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Select
            defaultValue="Online/Offline"
            style={{ width: 200 }}
            onChange={onEventLocationChange}
          >
            <OptGroup label="Place">
              <Option value="online">{MENTOR_MODAL.isOnline.online}</Option>
              <Option value="offline">{MENTOR_MODAL.isOnline.offline}</Option>
            </OptGroup>
          </Select>

          {stateEditWindow.isOnline && (
            <OfflineComponent MENTOR_MODAL={MENTOR_MODAL} />
          )}
        </Col>
      </Modal>
    );
  }
  return null;
};

export default ModalWindowEdit;
