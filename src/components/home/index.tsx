import Home from "./Home";
import homeReducer from "./homeReducer";
import * as types from "./types";

const homeComp = {
  components: {
    Home,
    homeReducer,
  },
  types,
};

export default homeComp;
