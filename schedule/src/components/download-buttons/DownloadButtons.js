import React from 'react';
import {
  Row,
  Col,
} from 'antd';
import DownloadShedulePdfButton from './download-buttons/DownloadShedulePdfButton';
import DownloadCsvTableButton from './download-buttons/DonloadScheduleCsvButton';

export default function DonwloadButtonsContainer() {
  return (
    <Row style={{margin: "1vh 0 1vh 0"}} >
      <Col span={3}>
        <DownloadCsvTableButton />
      </Col>
      <Col>
        <DownloadShedulePdfButton />
      </Col>
    </Row>
  );
}