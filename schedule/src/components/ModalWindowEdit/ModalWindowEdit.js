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
import { MENTOR_MODAL, TASKS_TYPES } from "./../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../../store/actions";

function getTasks(TASKS_TYPES) {
  return TASKS_TYPES.map((el) => {
    return (
      <Option value={el} key={el}>
        {el}
      </Option>
    );
  });
}

const { Option, OptGroup } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// Edit modal window component

const ModalWindowEdit = () => {
  const dispatch = useDispatch();
  const [isOfflineEvent, setIsOfflineEvent] = useState(false);
  const visible = useSelector(
    (state) => state.modalWindowReducer.editModalWindowVisability
  );

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

  return (
    <Modal visible={visible} onCancel={handleCancel}>
      <h2 className="wrapper-modal-edit__header">Edit event mode</h2>

      <Row gutter={16} style={{ marginTop: "1rem" }}>
        <Col span={6} style={{ marginLeft: "2rem" }}>
          <Input placeholder="Task Name" />
        </Col>
        <Col span={6}>
          <Select
            defaultValue="Task"
            style={{ width: 200 }}
            // onChange={handleChange}
          >
            <OptGroup label="TaskTitle">{getTasks(TASKS_TYPES)}</OptGroup>
          </Select>
        </Col>
      </Row>

      <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
        <TextArea rows={5} placeholder="Task Description" />
      </Col>

      <Row style={{ marginTop: "1rem" }}>
        <Col span={8} style={{ marginLeft: "2rem" }}>
          <Select
            defaultValue="Minsk +3"
            style={{ width: 200 }}
            // onChange={handleChange}
          >
            <OptGroup label="Timezones">
              <Option value="minsk">{MENTOR_MODAL.timezone.minsk}</Option>
              <Option value="warsaw">{MENTOR_MODAL.timezone.warsaw}</Option>
              <Option value="kaliningrad">
                {MENTOR_MODAL.timezone.kaliningrad}
              </Option>
            </OptGroup>
          </Select>
        </Col>
        <Col span={14}>
          <RangePicker
            style={{ marginLeft: "2rem" }}
            showTime={{
              hideDisabledOptions: true,
            }}
            format="YYYY-MM-DD HH:mm"
            // onChange={onChange}
          />
        </Col>
      </Row>

      <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
        <Input placeholder="Additional url" />
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
                <Option value="online">{MENTOR_MODAL.streetType.avenue}</Option>
                <Option value="offline">
                  {MENTOR_MODAL.streetType.street}
                </Option>
                <Option value="offline">{MENTOR_MODAL.streetType.lane}</Option>
              </OptGroup>
            </Select>
            <Input placeholder="Street" style={{ marginBottom: "5px" }} />
            <Input placeholder="№ of house" />
          </Col>
        )}
      </Col>
    </Modal>
  );
};

export default ModalWindowEdit;
