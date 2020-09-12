import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

export default function Preloader() {
  const events = useSelector(state => state.eventsReducer.events);

  return (
    <>
      { !events.length ? <Spin size="large" /> : null }
    </>
  );
}