import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';
import TableForSchedule from '../table/table';

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreator.initEvents());
    dispatch(actionCreator.initOptions());
  });

  return (
    <>
      <h1>Schedule</h1>
      <TableForSchedule />
    </>
  )};

export default Container;