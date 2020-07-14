import { store } from "../../redux/configureStore";
import { updateCurrentItem } from "./workActions";

export const getWork = () => {
  store.dispatch({ type: "WORK_FETCH_REQUESTED" });
};

export const getNextProject = (dir: number) => {
  const workReducer = store.getState().workReducer;

  const currentItem = workReducer.currentItem;
  const maxIndex = workReducer.workItems.length - 1;

  let newCurrentItem = currentItem + dir;

  //check if to small
  if (newCurrentItem < 0) {
    newCurrentItem = maxIndex;
  }

  //check if to big
  if (newCurrentItem > maxIndex) {
    newCurrentItem = 0;
  }

  store.dispatch(updateCurrentItem(newCurrentItem));
};
