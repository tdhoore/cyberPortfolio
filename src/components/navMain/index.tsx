import NavMain from "./navMain";
import navMainReducer from "./navMainReducer";
import * as types from "./types";

const navComp = {
  components: {
    NavMain,
    navMainReducer,
  },
  types,
};

export default navComp;
