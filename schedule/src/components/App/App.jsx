import React from 'react';
import './App.css';

import TableForSchedule from '../table/table';


const App = () => {
  return (
    <div className="wrapper">
      <h1>Schedule</h1>
      <TableForSchedule />
    </div>
  );
};

export default App;