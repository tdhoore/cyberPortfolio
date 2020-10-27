import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div  className="page404">
      <article className="panel">
        <header>
          <h2>404</h2>
          <p>Nothing here</p>
        </header>
        <Link to="/" className="defaultButton">return to home</Link>
      </article>
    </div>
  );
};

export default Page404;