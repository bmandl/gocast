import React from "react";

import "./contact.scss";


export const Contact = () => {
    return (
        <form action="" className="contact">
            <label htmlFor="first" className="half">First Name<br />
                <input type="text" name="first" placeholder="Your First Name" />
            </label>
            <label htmlFor="last" className="half">Last Name<br />
                <input type="text" name="last" placeholder="Your last Name" />
            </label>
            <label htmlFor="email">Your Email Address</label>
            <input type="email" name="email" placeholder="Your Email Address" />
            <label htmlFor="reason">Your Reason Of Contact</label>
            <select name="reason" id="reason">
                <option value="Business" defaultValue>Business</option>
            </select>
            <label htmlFor="message">Start Writing From Here</label>
            <textarea name="message" id="message" cols="30" rows="5"
                placeholder="Lorem Ipsum is simply dummy text of the printing and...……."></textarea>
            <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
    )
}