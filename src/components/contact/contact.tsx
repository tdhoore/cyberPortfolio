import React from "react";
import { motion } from "framer-motion";
import { panelAnim } from "../anim/animationPresets";
import Header from "../_core/Header";

const Contact = () => {
  return (
    <article className="contactArticle accentBarAfter">
      <Header title="Tim D'hoore - contact" url="https://www.timdhoore.com/contact"/>
      <motion.div className="contactMain panel" {...panelAnim}>
        <header>
          <h2>I'm still looking for work</h2>
          <p>Have anything?</p>
        </header>
        <p>info@timdhoore.com</p>
        <a href="mailto:info@timdhoore.com?subject=Let's%20make%20something%20awsome!!!" className="defaultButton" target="_blank">
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
            <a href="https://www.behance.net/tdhgraphics" rel="noopener noreferrer" target="_blank" className="linkButton behance">
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/timdhoore/" rel="noopener noreferrer" target="_blank" className="linkButton linkedIn">
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://www.artstation.com/tdhgraphics" rel="noopener noreferrer" target="_blank" className="linkButton artstation">
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
