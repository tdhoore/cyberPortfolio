import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store, configureStore } from "./redux/configureStore";
import Routs from "./redux/Routs";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const App = () => {
  configureStore();

  useEffect(() => {
    ReactGA.initialize("UA-181287390-1");
  
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <Provider store={store}>
      <Helmet>
        <meta property="og:title" content="test"/>
        <meta property="og:site_name" content="test"/>
        <meta property="og:image" content="sdfdsf"/>
        <meta property="og:url" content="https://www.timdhoore.com/sdfiodsfiojj"/>
        <meta property="twitter:card" content="summary_large_image"/>
      </Helmet>
      <BrowserRouter>
        <Routs />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
