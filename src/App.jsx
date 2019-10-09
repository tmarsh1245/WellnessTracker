import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Logs from './Logs.jsx';

var contentNode = document.getElementById("contents");


ReactDOM.render(<Logs/>, contentNode);
