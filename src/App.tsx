import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store, configureStore } from "./redux/configureStore";
import Routs from "./redux/Routs";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

const App = () => {
  configureStore();

  useEffect(() => {
    ReactGA.initialize("UA-181287390-1");
  
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routs />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
