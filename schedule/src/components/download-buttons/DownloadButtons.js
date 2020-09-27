import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row,
  Space,
} from 'antd';
import DownloadShedulePdfButton from './download-buttons/DownloadShedulePdfButton';
import DownloadCsvTableButton from './download-buttons/DonloadScheduleCsvButton';

export default function DonwloadButtonsContainer() {
  const isImpairedVersion = useSelector(state => state.optionsReducer.impairedVersion);

  return (
    <Row style={{margin: "1vh 0 1vh 0"}} >
      <Space
        size='middle'
        className={`${isImpairedVersion ? 'impairedVersion' : ''}`}
      >
        <DownloadCsvTableButton />
        <DownloadShedulePdfButton />
      </Space>
    </Row>
  );
}