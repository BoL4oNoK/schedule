import React from "react";
import { Col, Select, Input, Button } from "antd";
const { Option, OptGroup } = Select;

const OfflineComponent = ({
  MENTOR_MODAL,
  onOfflineInputTypeEvent,
  onOfflineSelectTypeEvent,
  onOfflineSubmit,
}) => {
  return (
    <Col span={12} style={{ marginTop: "1rem" }}>
      <Input
        placeholder="Town"
        style={{ marginBottom: "5px" }}
        attr="town"
        onChange={onOfflineInputTypeEvent}
      />
      <Select
        defaultValue="Type of street"
        style={{ width: 200, marginBottom: "5px" }}
        onChange={onOfflineSelectTypeEvent}
      >
        <OptGroup label="Type">
          <Option value="проспект">{MENTOR_MODAL.streetType.avenue}</Option>
          <Option value="улица">{MENTOR_MODAL.streetType.street}</Option>
          <Option value="переулок">{MENTOR_MODAL.streetType.lane}</Option>
        </OptGroup>
      </Select>
      <Input
        placeholder="Street"
        style={{ marginBottom: "5px" }}
        attr="street"
        onChange={onOfflineInputTypeEvent}
      />
      <Input
        placeholder="№ of house"
        attr="house"
        onChange={onOfflineInputTypeEvent}
      />
      <Button
        type="primary"
        onClick={onOfflineSubmit}
        style={{ marginTop: "5px" }}
      >
        Set Address
      </Button>
    </Col>
  );
};

export default OfflineComponent;
