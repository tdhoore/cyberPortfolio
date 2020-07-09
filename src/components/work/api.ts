import { store } from "../../redux/configureStore";
//import {} from "./workActions";

export const getWork = () => {
  store.dispatch({ type: "WORK_FETCH_REQUESTED" });
};
