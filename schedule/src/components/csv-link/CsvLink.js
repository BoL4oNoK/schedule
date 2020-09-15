import React from 'react'
import { CSVLink } from "react-csv";
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { HEADERS_FOR_TABLE_CSV } from '../../constants/constants';

export default function CsvLink() {
  const events = useSelector(state => state.eventsReducer.events);

  return (
    <Button type="dashed">
      <CSVLink
        data={events ? events : []}
        filename={'RSS-chedule.csv'}
        target='_blank'
        headers={HEADERS_FOR_TABLE_CSV}
      >
        Download Table
      </CSVLink>
    </Button>
  );
}