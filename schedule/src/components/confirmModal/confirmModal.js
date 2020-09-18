import React from "react";
import {
    ExclamationCircleOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";

import {  Modal  } from "antd";
const { confirm } = Modal;

const confirmModal = (onOkFn) => {
    confirm({
        title: 'Do you want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        content: "This action could not be reverted",
        onOk() {
          onOkFn();
        },
        onCancel() {},
    });
}

export default confirmModal;
