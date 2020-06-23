import { AnyAction } from "redux";
import { ActionTypes, aboutState } from "./types";

const initState: aboutState = {};

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
