import React from "react";
import { Row, Col, Select, Button, Input, Checkbox, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./../ModalWindow/ModalWindow.scss";

const ModalWindowEdit = () => {
  const { Option, OptGroup } = Select;
  return (
    <div className="modal-wrapper">
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
              <Option value="web">Web</Option>
              <Option value="back">Back</Option>
            </OptGroup>
          </Select>
        </Col>
        <Col span={10} style={{ textAlign: "right" }}>
          <Button shape="circle">&times;</Button>
        </Col>
      </Row>

      <Col span={22} style={{ margin: "1rem 0 0 2rem" }}>
        <Input placeholder="Task Description" />
      </Col>

      <Row style={{ marginTop: "1rem" }}>
        <Col span={10} style={{ marginLeft: "2rem" }}>
          TimeZone
        </Col>
        <Col span={10}>
          <DatePicker
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
