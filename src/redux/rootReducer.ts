import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import navMainComp from "../components/navMain/index";
import workComp from "../components/work/index";
import { ReduxState } from "./types";

const createRootReducer = (history: any) =>
  combineReducers<ReduxState>({
    //router: connectRouter(history),
    navMainReducer: navMainComp.components.navMainReducer,
    workReducer: workComp.components.workReducer,
  });
export default createRootReducer;
