import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ContactLink = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

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
