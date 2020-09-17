import React from "react";
import { Col, Select, Input } from "antd";
const { Option, OptGroup } = Select;

const OfflineComponent = ({ MENTOR_MODAL }) => {
  return (
    <Col span={12} style={{ marginTop: "1rem" }}>
      <Input placeholder="Town" style={{ marginBottom: "5px" }} />
      <Select
        defaultValue="Type of street"
        style={{ width: 200, marginBottom: "5px" }}
      >
        <OptGroup label="Type">
          <Option value="avenue">{MENTOR_MODAL.streetType.avenue}</Option>
          <Option value="street">{MENTOR_MODAL.streetType.street}</Option>
          <Option value="lane">{MENTOR_MODAL.streetType.lane}</Option>
        </OptGroup>
      </Select>
      <Input placeholder="Street" style={{ marginBottom: "5px" }} />
      <Input placeholder="№ of house" />
    </Col>
  );
};

export default OfflineComponent;
