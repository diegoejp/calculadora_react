import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';


let myDiv = document.querySelector("#root");
myDiv.classList.add("container");

ReactDOM.render(<App name="Diego"/>, document.querySelector('#root'));