import React from "react";
import { Link } from "react-router-dom";
import { props } from "./types";

const NavMain = (props: props) => {
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
        <Link to="/work" className="returnToWork defaultButton">
          Back to work
        </Link>
      )}
    </nav>
  );
};

export default NavMain;
