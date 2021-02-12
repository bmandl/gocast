import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "../Button/Button";

import "./subscribe.scss";

const ButtonText = (props) => {
    return (
        <>
            {props.text}
            <FontAwesomeIcon icon={props.icon} />
        </>
    )
}

export const Subscribe = () => {
    return (
        <div className="cta-subscribe">
            <form action="">
                <input type="email" placeholder="Type Your Email" />
                <Button type="submit" style="primary" text={<ButtonText text="Subscribe " icon={faArrowRight} />} />
            </form>
        </div>
    )
}