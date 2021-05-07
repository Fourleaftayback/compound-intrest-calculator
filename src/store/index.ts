import { createStore, compose } from 'redux';

import config from '../config';
import reducers from './reducers';

const envSetting =
  process.env.NODE_ENV === 'development'
    ? config.dev.admin.envSetting
    : config.prod.admin.envSetting;

const reduxDevTools =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store =
  envSetting === 'PROD'
    ? createStore(reducers)
    : createStore(reducers, compose(reduxDevTools));

export default store;
