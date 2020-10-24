import { AnyAction } from "redux";
import { navState } from "./types";

const initState: navState = {
  navLinks: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Work",
      link: "/work",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ],
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
