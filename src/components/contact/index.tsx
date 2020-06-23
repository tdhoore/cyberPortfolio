import contact from "./contact";
import contactReducer from "./contactReducer";
import * as types from "./types";

const contactComp = {
  components: {
    contact,
    contactReducer,
  },
  types,
};

export default contactComp;
