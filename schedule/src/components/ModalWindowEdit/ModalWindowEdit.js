import React, { useState, useEffect } from "react";
import { Row, Col, Select, Input, Checkbox, DatePicker, Modal } from "antd";
import "antd/dist/antd.css";
import "./ModalWindow.scss";
import {
  MENTOR_MODAL,
  TASKS_TYPES,
  TIME_ZONES,
} from "./../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";
import moment from "moment";
import {
  getTasks,
  getTimeZones,
  getRightData,
} from "./../../utils/editWindowUtils";
import OfflineComponent from "./OfflineComponent";

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// Edit modal window component

const ModalWindowEdit = () => {
  const dispatch = useDispatch();

  const permanentEvent = useSelector((state) => {
    return state.permanentEventReducer.permanentEvent;
  });
  const visible = useSelector(
    (state) => state.modalWindowReducer.editModalWindowVisability
  );

  const handleCancel = () => {
    dispatch(actionCreator.changeEditModalWindowVisible(!visible));
  };

  const [stateEditWindow, setStateEditWindow] = useState({
    description: "",
    place: "",
    dateTime: "",
    organizer: "",
    comment: "",
    descriptionUrl: "",
    type: "",
    deadlineDateTime: "",
    timeZone: "",
    name: "",
    id: "",
  });

  // "description": "Материалы для изучения основ HTML",
  // "place": "",
  // "dateTime": "2020-09-06 12:00",
  // "organizer": "dzmitry-varabei",
  // "comment": "",
  // "descriptionUrl": "https://github.com/rolling-scopes-school/tasks/blob/master/tasks/code-basics.md",
  // "type": "selfeducation",
  // "deadlineDateTime": "2020-09-14 23:59",
  // "timeZone": "+3",
  // "name": "Self HTML Basic",
  // "id": "pgFgdMFF5sWd3svUTOwj"

  useEffect(() => {
    setStateEditWindow({ ...permanentEvent });
  }, [permanentEvent]);

  function onEventLocationChange(e) {
    if (e === "online") {
      setStateEditWindow({
        ...stateEditWindow,
        place: "online",
      });
    } else {
      setStateEditWindow({
        ...stateEditWindow,
        place: "offline",
      });
    }
  }

  const onEventChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      [e.target.getAttribute("attr")]: e.target.value,
    });
  };

  const onSelectTypeChange = (e) => {
    setStateEditWindow({
      ...stateEditWindow,
      type: e,
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

  const onDateChange = (event) => {
    console.log(event);
    setStateEditWindow({
      ...stateEditWindow,
      dateTime: event[0]._i,
      deadlineDateTime: event[1]._i,
    });
  };

  const onModalSubmit = () => {
    const rightData = getRightData(stateEditWindow);
    console.log(rightData);
    dispatch(actionCreator.updateEvent([rightData.id, rightData]));
    dispatch(actionCreator.changeEditModalWindowVisible(!visible));
  };

  if (permanentEvent) {
    console.log(permanentEvent);
    return (
      <Modal visible={visible} onCancel={handleCancel} onOk={onModalSubmit}>
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
              attr="name"
              value={stateEditWindow.name}
              onChange={onEventChange}
            />
          </Col>
          <Col span={6}>
            <Select
              style={{ width: 200 }}
              value={stateEditWindow.type}
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
            attr="description"
            value={stateEditWindow.description}
            onChange={onEventChange}
          />
        </Col>

        <Row style={{ marginTop: "1rem" }}>
          <Col span={8} style={{ marginLeft: "2rem" }}>
            <Select
              style={{ width: 200 }}
              value={stateEditWindow.timeZone}
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
              format={MENTOR_MODAL.DATE_FORMAT}
              value={[
                moment(stateEditWindow.dateTime, MENTOR_MODAL.DATE_FORMAT),
                !permanentEvent.deadlineDateTime
                  ? ""
                  : moment(
                      stateEditWindow.deadlineDateTime,
                      MENTOR_MODAL.DATE_FORMAT
                    ),
              ]}
              onChange={onDateChange}
            />
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Input
            placeholder="Additional url"
            attr="descriptionUrl"
            value={stateEditWindow.descriptionUrl}
            onChange={onEventChange}
          />
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Checkbox onChange={onCheckboxChange}>Checkbox for feedback</Checkbox>
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

          {stateEditWindow.place === "offline" ? (
            <OfflineComponent MENTOR_MODAL={MENTOR_MODAL} />
          ) : (
            ""
          )}
        </Col>
      </Modal>
    );
  }
  return null;
};

export default ModalWindowEdit;
