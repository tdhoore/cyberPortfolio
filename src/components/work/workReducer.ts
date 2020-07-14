import { AnyAction } from "redux";
import { ActionTypes, workState } from "./types";

const initState: workState = {
  currentItem: 0,
  workItems: [],
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.gotWork:
      return {
        ...state,
        workItems: action.payload,
      };

    case ActionTypes.updateCurrentItem:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
