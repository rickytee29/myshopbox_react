import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { createBrowserHistory } from 'history';
//import configureStore from './store/configureStore';
// import { syncHistoryWithStore } from 'react-router-redux';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import reducers from './persistentReducers';
import './css/App.scss';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
let state = {
  userCountryCode: 'TT',
  browserCountryCode: '',
  userData: null,
};

let store = createStore(
  persistedReducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//   const history = syncHistoryWithStore(createBrowserHistory(), store);
let persistor = persistStore(store);
//<BrowserRouter history={history} routes={routes} />
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>{routes}</BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);
