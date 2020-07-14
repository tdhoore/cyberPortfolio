import Work from "./Work";
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
