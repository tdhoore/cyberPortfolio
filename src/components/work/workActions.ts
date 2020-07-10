import { ActionTypes } from "./types";

export const updateCurrentItem = (newCurrentItem: number) => {
  return { type: ActionTypes.updateCurrentItem, payload: newCurrentItem };
};
