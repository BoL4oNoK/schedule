import React from 'react';
import './App.css';
import ScheduleList from '../list/ScheduleList'
import TableForSchedule from '../table/table';

const App = () => {
  return (<div className="wrapper">
    <h1>Schedule</h1>
    <ScheduleList/>
  </div>);
}

export default App;