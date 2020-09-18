import React from "react";
import {
    ExclamationCircleOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

import {  Modal  } from "antd";
const { confirm } = Modal;

const confirmModal = (onOkFn) => {
    confirm({
        title: 'Do you Want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        onOk() {
          onOkFn();
        },
        onCancel() {},
    });
}

export default confirmModal;
