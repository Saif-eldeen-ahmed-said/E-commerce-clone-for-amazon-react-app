import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initstate } from "./reducer";
import { StateProvider } from "./Cartcontext";




ReactDOM.render(
  <React.StrictMode>
    <StateProvider initstate={initstate} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


