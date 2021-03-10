import React from 'react';
import Button from '../Button/Button';

import './contact.scss';

const Contact = () => (
  <form action="" className="contact">
    <label htmlFor="first" className="half">
      First Name
      <br />
      <input type="text" name="first" placeholder="Your First Name" />
    </label>
    <label htmlFor="last" className="half">
      Last Name
      <br />
      <input type="text" name="last" placeholder="Your last Name" />
    </label>
    <label htmlFor="email" className="whole">
      Your Email Address
      <br />
      <input type="email" name="email" placeholder="Your Email Address" />
    </label>

    <label htmlFor="reason" className="whole">
      Your Reason Of Contact
      <br />
      <select name="reason" id="reason">
        <option value="Business" defaultValue>
          Business
        </option>
      </select>
    </label>
    <label htmlFor="message" className="whole">
      Start Writing From Here
      <br />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="5"
        placeholder="Lorem Ipsum is simply dummy text of the printing and...……."
      />
    </label>

    <Button submit styling="primary" text="Submit" />
  </form>
);

export default Contact;
