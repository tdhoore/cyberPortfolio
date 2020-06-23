import { AnyAction } from "redux";
import { ActionTypes, workDetailState } from "./types";

const initState: workDetailState = {};

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
