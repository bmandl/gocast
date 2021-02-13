import React from "react";
import {Contact} from "../../components/Contact/Contact";
import {Subscribe} from "../../components/Subscribe/Subscribe";

import "./contact.scss";

export const ContactPage = () => {
    return (
        <>
        <section className="contact-container">
            <h2>Get In Touch</h2>
            <Contact />
        </section>
        <Subscribe title="New Episode Every Week!" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed." />
        </>
    )
}