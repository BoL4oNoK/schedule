import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Container from '../Container';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Container />
      </div>
    </Provider>
  );
};

export default App;