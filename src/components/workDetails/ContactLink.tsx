import React from "react";
import { Link } from "react-router-dom";

const ContactLink = () => {
  return (
    <section className="contactLink panel">
      <header>
        <h4>Want to chat?</h4>
      </header>
      <Link to="/contact" className="defaultButton">
        Let's talk
      </Link>
    </section>
  );
};

export default ContactLink;
