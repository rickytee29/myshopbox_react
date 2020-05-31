import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
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
  blacklist: ['isLoggingIn', 'isReggingIn', 'isLoading', 'logoSrc'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, applyMiddleware(thunk));
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
