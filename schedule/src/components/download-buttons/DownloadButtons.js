import React from 'react';
import {
  Row,
  Space,
} from 'antd';
import DownloadShedulePdfButton from './download-buttons/DownloadShedulePdfButton';
import DownloadCsvTableButton from './download-buttons/DonloadScheduleCsvButton';

export default function DonwloadButtonsContainer() {
  return (
    <Row style={{margin: "1vh 0 1vh 0"}} >
      <Space size='middle'>
        <DownloadCsvTableButton />
        <DownloadShedulePdfButton />
      </Space>
    </Row>
  );
}