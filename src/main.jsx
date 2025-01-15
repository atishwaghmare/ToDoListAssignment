// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
//  import './index.css'
//  import App from './App.jsx'
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './Routing/AppRoutes.jsx';
// import { configureStore, createSlice } from '@reduxjs/toolkit';

// import todoReducer from "./toolkit/todoSlice.js";
// import { store } from "./toolkit/store.js";
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { Provider } from 'react-redux';
// // import { store } from './toolkit/store.js';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import store from './store';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './To_Do/store';


// createRoot(document.getElementById('root')).render(
//  <div>
//     <App></App>
// {/* <Provider store={store}><App/></Provider> */}

// {/* <Provider store={store}>
//  <App></App>

// </Provider> */}
//  {/* <ApiProvider><App/></ApiProvider> */}

//  {/* <RouterProvider router={router}><App/></RouterProvider> */}
  
//  </div>
  
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './To_Do/store';
import { createRoot } from 'react-dom/client';

// ReactDOM.render(
 
//   document.getElementById('root')
// );
createRoot(document.getElementById('root')).render(
    <div>
         <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  {/* <App/> */}
    </div>
)