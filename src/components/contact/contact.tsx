import React from "react";
import { props } from "./types";
import DecoNumbers from "../_core/DecoNumbers";

const Contact = (props: props) => {
  return (
    <article className="contactArticle">
      <div className="contactMain panel">
        <header>
          <h2>I'm still looking for work</h2>
          <p>Have anything?</p>
        </header>
        <a href="mailto:" className="defaultButton">
          Leave a message
        </a>
      </div>
      <section className="socialMediaSection panel">
        <header>
          <h3>Social media</h3>
        </header>
        <ul className="socialLinks">
          <li>
            <a href="" target="_blank">
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <span>Link</span>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <span>Link</span>
            </a>
          </li>
        </ul>
      </section>
      <div className="panel letter">
        <div className="letterImg"></div>
      </div>
    </article>
  );
};

export default Contact;
