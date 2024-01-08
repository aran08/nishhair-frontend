import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Footer from './layout/footer/Footer'
import Navbar from './layout/navbar/Navbar';

import { Provider } from 'react-redux'
import store from './redux/store/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Navbar/>
    <App/>
    {/* <Footer/> */}
    <ToastContainer/>
  </Provider>,   
);

reportWebVitals();