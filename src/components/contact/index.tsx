import Contact from "./Contact";
import contactReducer from "./contactReducer";
import * as types from "./types";

const contactComp = {
  components: {
    Contact,
    contactReducer,
  },
  types,
};

export default contactComp;
