import React from "react";
import { props } from "./types";

const Contact = (props: props) => {
  return (
    <article className="contactArticle">
      <header>
        <h2 className="hide">Contact</h2>
      </header>
      <div className="letter">
        <span>Inbox 0</span>
        <p>Love to hear from you</p>
      </div>
      <div className="contactInfo">
        <a href="mailto:" className="defaultButton">
          Leave a message
        </a>
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
        <div className="pixFont blurEffectText decoNumbers">
          <div>541</div>
          <div>541</div>
          <div>541</div>
          <div>541</div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
