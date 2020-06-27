import { AnyAction } from "redux";
import { ActionTypes, workDetailsState } from "./types";

const initState: workDetailsState = {};

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
