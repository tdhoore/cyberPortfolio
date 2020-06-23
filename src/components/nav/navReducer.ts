import { AnyAction } from "redux";
import { ActionTypes, navState } from "./types";

const initState: navState = {};

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
