import React from 'react';
import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import App from './routes/App';

ReactDom.render(
  // <Provider>

  // </Provider>,
  <App />,
  document.getElementById('app'),

);
