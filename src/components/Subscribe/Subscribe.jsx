import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./style.scss";

export const Subscribe = () => {
    return (
        <>
            <section className="subscribe">
                <h2>New Episode Every Week!</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed.</p>
                <div className="cta-subscribe">
                    <form action="">
                        <input type="email" placeholder="Type Your Email" />
                        <submit className="btn btn-primary">Subscribe {<FontAwesomeIcon icon={faArrowRight} />}</submit>
                    </form>
                </div>
            </section>
        </>
    )
}