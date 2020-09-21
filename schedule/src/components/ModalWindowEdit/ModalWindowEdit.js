import React, { useState, useRef } from "react";
import {
  Row,
  Col,
  Select,
  Button,
  Input,
  Checkbox,
  DatePicker,
  Modal,
} from "antd";
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

function getTasks(TASKS_TYPES) {
  return TASKS_TYPES.map((el) => {
    return (
      <Option value={el} key={el}>
        {el}
      </Option>
    );
  });
}

function getTimeZones(TIME_ZONES) {
  return TIME_ZONES.map((el) => {
    return (
      <Option value={el.name} key={el.name}>
        {el.name}({el.value})
      </Option>
    );
  });
}

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// Edit modal window component

const ModalWindowEdit = () => {
  const { DATE_FORMAT } = userModal;
  const dispatch = useDispatch();
  const [isOfflineEvent, setIsOfflineEvent] = useState(false);
  const visible = useSelector(
    (state) => state.modalWindowReducer.editModalWindowVisability
  );
  const permanentEvent = useSelector((state) => {
    return state.permanentEventReducer.permanentEvent;
  });
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);

  const onEventLocationChange = (e) => {
    if (e === "online") {
      setIsOfflineEvent(false);
    } else {
      setIsOfflineEvent(true);
    }
  };

  const handleCancel = () => {
    dispatch(actionCreator.changeEditModalWindowVisible(!visible));
  };

  if (permanentEvent) {
    console.log(permanentEvent);
    return (
      <Modal visible={visible} onCancel={handleCancel} className={ isImpairedVersion ? 'impairedVersion' : '' }>
        <h2 className="wrapper-modal-edit__header">Edit event mode</h2>

        <Row gutter={16} style={{ marginTop: "1rem" }}>
          <Col span={6} style={{ marginLeft: "2rem" }}>
            <Input placeholder="Task Name" value={permanentEvent.name} />
          </Col>
          <Col span={6}>
            <Select
              value={permanentEvent.type}
              style={{ width: 200 }}
              // onChange={handleChange}
            >
              <OptGroup label="TaskTitle">{getTasks(TASKS_TYPES)}</OptGroup>
            </Select>
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <TextArea
            rows={5}
            placeholder="Task Description"
            value={permanentEvent.description}
          />
        </Col>

        <Row style={{ marginTop: "1rem" }}>
          <Col span={8} style={{ marginLeft: "2rem" }}>
            <Select
              defaultValue={"Timezone" + " " + permanentEvent.timeZone}
              style={{ width: 200 }}
              // onChange={handleChange}
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
                !permanentEvent.deadline
                  ? ""
                  : moment(
                      `${permanentEvent.deadline} ${permanentEvent.currentTime}`,
                      DATE_FORMAT
                    ),
              ]}
            />
          </Col>
        </Row>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Input
            placeholder="Additional url"
            value={permanentEvent.descriptionUrl}
          />
        </Col>

        <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
          <Checkbox
          // onchange={onchange}
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

          {isOfflineEvent && (
            <Col span={12} style={{ marginTop: "1rem" }}>
              <Input placeholder="Town" style={{ marginBottom: "5px" }} />
              <Select
                defaultValue="Type of street"
                style={{ width: 200, marginBottom: "5px" }}
              >
                <OptGroup label="Type">
                  <Option value="online">
                    {MENTOR_MODAL.streetType.avenue}
                  </Option>
                  <Option value="offline">
                    {MENTOR_MODAL.streetType.street}
                  </Option>
                  <Option value="offline">
                    {MENTOR_MODAL.streetType.lane}
                  </Option>
                </OptGroup>
              </Select>
              <Input placeholder="Street" style={{ marginBottom: "5px" }} />
              <Input placeholder="№ of house" />
            </Col>
          )}
        </Col>
      </Modal>
    );
  }
  return null;
};

export default ModalWindowEdit;
