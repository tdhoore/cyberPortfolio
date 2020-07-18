import React from "react";

const Background = (props: any) => {
  const setArrowClasses = () => {
    if (props.activePage) {
      switch (props.activePage) {
        case "/":
          return "arrowHome";
        case "/work":
          return "arrowWork";
        case "/about":
          return "arrowAbout";
        case "/contact":
          return "arrowContact";

        default:
          return "arrowDetail";
      }
    }
  };

  return (
    <div className="background">
      <div className="bgRect rect1"></div>
      <div className="bgRect rect2"></div>
      <div className="bgRect rect3"></div>
      <div className="bgRect rect4"></div>
      <div className={`arrows arrowsLeft ${setArrowClasses()}`}>
        <div></div>
        <div></div>
      </div>
      <div className={`arrows arrowsRight ${setArrowClasses()}`}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Background;
