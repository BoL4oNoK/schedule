import React, { useState, useRef } from "react";
import { Select } from "antd";
const { Option } = Select;

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
      <Option value={el.value} key={el.name}>
        {el.name} ({el.value})
      </Option>
    );
  });
}

export { getTasks, getTimeZones };
