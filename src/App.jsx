import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Logs from './Logs.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg} from '@fortawesome/free-regular-svg-icons';

library.add(faCheckSquare, faStar, faStarHalfAlt, faStarReg);

var contentNode = document.getElementById("contents");

ReactDOM.render(<Logs/>, contentNode);
