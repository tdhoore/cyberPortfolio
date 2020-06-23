import home from "./home";
import homeReducer from "./homeReducer";
import * as types from "./types";

const homeComp = {
  components: {
    home,
    homeReducer,
  },
  types,
};

export default homeComp;
