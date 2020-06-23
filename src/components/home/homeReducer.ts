import { AnyAction } from "redux";
import { ActionTypes, homeState } from "./types";

const initState: homeState = {};

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
