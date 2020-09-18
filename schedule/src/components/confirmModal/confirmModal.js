import React from "react";
import {
    WarningTwoTone
} from '@ant-design/icons';
import "antd/dist/antd.css";

import {  Modal  } from "antd";
const { confirm } = Modal;

const confirmModal = (eventName, onOkFn) => {
    confirm({
        title: `Do you want to delete event "${eventName}"?`,
        icon: <WarningTwoTone twoToneColor="#ff0000" />,
        content: 'This action could not be reverted',
        okText: 'Yes, delete event!',
        okType: 'danger',
        onOk() {
          onOkFn();
        },
        onCancel() {},
    });
}

export default confirmModal;
