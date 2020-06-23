import nav from "./nav";
import navReducer from "./navReducer";
import * as types from "./types";

const navComp = {
  components: {
    nav,
    navReducer,
  },
  types,
};

export default navComp;
