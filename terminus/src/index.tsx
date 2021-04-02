import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pager from './Pager';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Pager />
  </BrowserRouter>,
  document.getElementById('root')
);