import React from "react";
import { props } from "./types";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";

const Contact = () => {
  return (
    <article className="contactArticle accentBarAfter">
      <motion.div className="contactMain panel" {...panelAnim}>
        <header>
          <h2>I'm still looking for work</h2>
          <p>Have anything?</p>
        </header>
        <a href="mailto:" className="defaultButton">
          Leave a message
        </a>
      </motion.div>
      <motion.section
        className="socialMediaSection panel"
        {...panelAnim}
        transition={{ ...panelAnim.transition, delay: 0.4 }}
      >
        <header>
          <h3>Social media</h3>
        </header>
        <ul className="socialLinks">
          <li>
            <a href="" target="_blank" className="linkButton">
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" className="linkButton">
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" className="linkButton">
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank" className="linkButton">
              <span>Link</span>
            </a>
          </li>
        </ul>
      </motion.section>
      <motion.div
        className="panel letter"
        {...panelAnim}
        transition={{ ...panelAnim.transition, delay: 0.5 }}
      >
        <div className="letterImg"></div>
      </motion.div>
    </article>
  );
};

export default Contact;
