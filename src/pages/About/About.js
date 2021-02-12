import React from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Slider } from "../../components/Slider/Slider";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import {Button} from "../../components/Button/Button";

import './about.scss';

ReactDOM.render([<Button style="primary" text="Subscribe" />,<Button style="secondary" text={["Donate ",<FontAwesomeIcon icon={faPaypal} />]} />],document.getElementById("cta-top"));
ReactDOM.render(<Slider title="Blog Posts" />, document.getElementById("slider"));
ReactDOM.render(<Subscribe />,document.getElementById("subscribe"));