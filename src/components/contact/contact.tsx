import React from "react";
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
        <p>mail@mail.com</p>
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
            <a href="mailto:tim@mail.com?subject=I%20need%20something%20awsome%20made!!!" target="_blank" className="linkButton">
              <span>mymail@mail.com</span>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/tdhgraphics" target="_blank" className="linkButton">
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/timdhoore/" target="_blank" className="linkButton">
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://www.artstation.com/tdhgraphics" target="_blank" className="linkButton">
              <span>Artstation</span>
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
