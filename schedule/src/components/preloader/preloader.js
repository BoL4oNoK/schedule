import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import './preloader.css';

export default function Preloader() {
  const events = useSelector(state => state.eventsReducer.events);

  return (
    <>
      { events ? null : <Spin size="large" /> }
    </>
  );
}