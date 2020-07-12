import { store } from "../../redux/configureStore";
import { push } from "connected-react-router";
//import {} from "./homeActions";

export const gotToWork = () => {
  store.dispatch(push("/work"));
};
