import React from "react";
import { Provider } from "react-redux";
import { store, configureStore } from "./redux/configureStore";
import Routs from "./redux/Routs";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routs />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
