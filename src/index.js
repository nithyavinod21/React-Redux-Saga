import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import rootSaga from './sagas';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();

const store= createStore(reducers , applyMiddleware(sagaMiddleWare,logger));

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
