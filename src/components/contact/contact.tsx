import React from "react";
import { props } from "./types";

const Contact = (props: props) => {
  return (
    <article className="contactArticle">
      <header>
        <h2 className="hide">Contact</h2>
        <span>Inbox 0</span>
        <p>Love to hear from you</p>
      </header>
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
    </article>
  );
};

export default Contact;
