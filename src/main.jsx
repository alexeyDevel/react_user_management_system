import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import './reset.scss';
import './global.scss';
import store from './store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>      
    </Provider>
  </React.StrictMode>
)
