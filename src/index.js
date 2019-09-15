import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import store from './redux/store';
import App from './App';
import {fetchQuotesApi} from './redux/actions';


store.dispatch(fetchQuotesApi());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
