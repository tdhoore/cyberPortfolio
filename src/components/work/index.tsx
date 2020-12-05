import Work from "./work";
import workReducer from "./workReducer";
import * as types from "./types";

const workComp = {
  components: {
    Work,
    workReducer,
  },
  types,
};

export default workComp;
