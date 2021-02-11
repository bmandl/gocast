import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./_subscribe.scss";

export const Subscribe = () => {
    return (
        <div className="cta-subscribe">
            <form action="">
                <input type="email" placeholder="Type Your Email" />
                <submit className="btn btn-primary">Subscribe {<FontAwesomeIcon icon={faArrowRight} />}</submit>
            </form>
        </div>
    )
}