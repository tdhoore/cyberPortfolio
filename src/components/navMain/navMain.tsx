import React from "react";
import { Link } from "react-router-dom";
import { props } from "./types";

const NavMain = (props: props) => {
  console.log(props.activeLink);
  return (
    <nav>
      {props.activeLink !== "WorkDetail" ? (
        <ul>
          {props.links?.map((link) => {
            return (
              <li key={`mainNavLinks${link.title}`}>
                <Link
                  to={link.link}
                  className={
                    link.title === props.activeLink ? `activeElement` : ""
                  }
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <a className="returnToWork defaultButton">Back to work</a>
      )}
    </nav>
  );
};

export default NavMain;
