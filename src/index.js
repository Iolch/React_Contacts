import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';

// import reducers
import ContactReducer from './store/reducers/Contacts';


const rootReducer = combineReducers({
  contactReducer: ContactReducer
});
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contactReducer'] 
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);


ReactDOM.render(

  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
