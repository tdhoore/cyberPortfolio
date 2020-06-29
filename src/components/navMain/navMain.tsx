import React from "react";
import { Link } from "react-router-dom";
import { props } from "./types";

const NavMain = (props: props) => {
  return (
    <nav>
      <ul>
        {props.links?.map((link) => {
          return (
            <li key={`mainNavLinks${link.title}`}>
              <Link
                to={link.link}
                className={link.title === "Work" ? `activeElement` : ""}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMain;
