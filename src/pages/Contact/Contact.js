import React from "react";
import ReactDOM from "react-dom";

import {Contact} from "../../components/Contact/Contact";
import {Button} from "../../components/Button/Button";
import {Subscribe} from "../../components/Subscribe/Subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

import "./contact.scss";

ReactDOM.render([<Button style="primary" text="Subscribe" key="1" />, <Button style="secondary" text={["Donate ", <FontAwesomeIcon icon={faPaypal} />]} key="2" />], document.getElementById("cta-top"));
ReactDOM.render(<Contact />,document.getElementById("contact"));
ReactDOM.render(<Subscribe />, document.getElementById("subscribe"));