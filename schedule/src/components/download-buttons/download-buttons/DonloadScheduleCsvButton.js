import React from 'react'
import { CSVLink } from "react-csv";
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import {
  HEADERS_FOR_TABLE_CSV,
  DOWNLOAD_BUTTONS_NAME
} from '../../../constants/constants';

export default function DownloadCsvTableButton() {
  const events = useSelector(state => state.eventsReducer.events);

  return (
    <Button type="dashed">
      <CSVLink
        data={events ? events : []}
        filename={'RSS-chedule.csv'}
        target='_blank'
        headers={HEADERS_FOR_TABLE_CSV}
      >
        { DOWNLOAD_BUTTONS_NAME.downloadCsvButtonName }
      </CSVLink>
    </Button>
  );
}