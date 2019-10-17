import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Logs from './Logs.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faStar, faStarHalfAlt, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg, faPlusSquare} from '@fortawesome/free-regular-svg-icons';

library.add(faCheckSquare, faStar, faStarHalfAlt, faStarReg, faArrowAltCircleLeft, faArrowAltCircleRight,faPlusSquare);

var contentNode = document.getElementById("contents");

ReactDOM.render(<Logs/>, contentNode);
