import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './Users';
import Admin from './Admin';
import Test from './video-11';
import StateManagementLectrue from './video-12';
import StateManagementLectrueInClassComponent from './video-13';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Users/>
    <Admin/>
    <Test/> */}
    {/* <StateManagementLectrue/> */}
    <StateManagementLectrueInClassComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
