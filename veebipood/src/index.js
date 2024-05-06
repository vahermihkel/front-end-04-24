import React from 'react'; // node_module kaustast
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // tegemist on src kausta failiga
import App from './App'; // tegemist on src kausta failiga
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// loogelised sulud tähendavad, et võetakse 1 tükk moodulist

// Navigeerimiseks:
// 1. peame panema peale uue mooduli nimega react-router-dom:
//       "npm install react-router-dom"
// peame selle installi tegema projekti kaustas.
// 2. importima vajalikud osad sellest uuest moodulist
// 3. peame ümbritsema BrowserRouteri tagiga <App/> tagi
// 4. peame tegema seoseid URLi ja HTMLi vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
