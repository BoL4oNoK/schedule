import React from "react";
import { Row, Col, Select, Button, Input, Checkbox, DatePicker } from "antd";
import "antd/dist/antd.css";

import ModalWindowEdit from "./../ModalWindowEdit/ModalWindowEdit";

const ModalWindow = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Modal</h1>
      <ModalWindowEdit />
    </>
  );
};

export default ModalWindow;
