import { AnyAction } from "redux";
import { ActionTypes, navState } from "./types";

const initState: navState = {
  navLinks: [
    {
      title: "Home",
      link: "/",
      isActive: true,
    },
    {
      title: "Work",
      link: "/work",
      isActive: false,
    },
    {
      title: "About",
      link: "/about",
      isActive: false,
    },
    {
      title: "Contact",
      link: "/contact",
      isActive: false,
    },
  ],
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    /*case ActionTypes.example:
      return {
        ...state,
        example: action.payload,
      };*/
    default:
      return state;
  }
};
