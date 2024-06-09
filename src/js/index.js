import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";




// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

//import your own components



    

    ReactDOM.render(<Home />, document.querySelector("#appuno"));
//render your react application
