import WorkDetails from "./WorkDetails";
import workDetailsReducer from "./workDetailsReducer";
import * as types from "./types";

const workDetailsComp = {
  components: {
    WorkDetails,
    workDetailsReducer,
  },
  types,
};

export default workDetailsComp;
