import React from "react";
import { props } from "./types";
import DecoNumbers from "../_core/DecoNumbers";

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
        <DecoNumbers />
      </div>
    </article>
  );
};

export default Contact;
