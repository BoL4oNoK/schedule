import React from "react";
import { Row, Col, Select, Button, Input, Checkbox, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./ModalWindow.scss";

const ModalWindowEdit = () => {
  const { Option, OptGroup } = Select;
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;
  return (
    <div className="wrapper-modal-edit">
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
            <OptGroup label="TaskTitle">
              <Option value="web">Web/JS</Option>
              <Option value="andwoid">Android</Option>
              <Option value="ios">IOS</Option>
              <Option value="qa">QA</Option>
            </OptGroup>
          </Select>
        </Col>
        <Col span={10} style={{ textAlign: "right" }}>
          <Button shape="circle">&times;</Button>
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
              <Option value="minsk">Minsk (GMT +3)</Option>
              <Option value="kyiv">Kyiv (GMT +3)</Option>
              <Option value="moscow">Moscow (GMT +3)</Option>
            </OptGroup>
          </Select>
        </Col>
        <Col span={14}>
          <RangePicker
            style={{ marginLeft: "2rem" }}
            showTime={{
              hideDisabledOptions: true,
            }}
            format="YYYY-MM-DD HH:mm:ss"
            // onChange={onChange}
          />
        </Col>
      </Row>

      <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
        <Input placeholder="Additional url" />
      </Col>

      <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
        <Select
          defaultValue="Online/Offline"
          style={{ width: 200 }}
          // onChange={handleChange}
        >
          <OptGroup label="Place">
            <Option value="online">Online</Option>
            <Option value="offline">Offline</Option>
          </OptGroup>
        </Select>
      </Col>

      <Checkbox
        // onChange={onChange}
        style={{ margin: "1rem 0 0 2rem" }}
      >
        Checkbox for feedback
      </Checkbox>

      <Row style={{ textAlign: "right" }}>
        <Col span={11}></Col>
        <Col span={12}>
          <Button style={{ marginRight: "1rem" }}>Save</Button>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ModalWindowEdit;
