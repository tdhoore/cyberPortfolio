import { AnyAction } from "redux";
import { ActionTypes, contactState } from "./types";

const initState: contactState = {};

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
