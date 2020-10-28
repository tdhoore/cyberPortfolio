import React from "react";
import { Helmet } from "react-helmet";
import { headerProps } from "./types";

const Header = (props:headerProps) => {
  return (
    <Helmet>
        <meta property="og:title" content={props.title}/>
        <meta property="og:site_name" content="Tim D'hoore - portfolio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={props.image ? props.image : "/assets/img/socialImage.jpg"}/>
        <meta property="og:url" content={props.url}/>
        <meta property="og:description" content="I’m Tim D'hoore, a front-end developer with a passion for creating unique interactive websites by using 3d elements, animation and handcrafted images."/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@helptosh"/>
        <meta name="twitter:image" content={props.image ? props.image : "/assets/img/socialImage.jpg"}/>
      </Helmet>
  );
};

export default Header;
