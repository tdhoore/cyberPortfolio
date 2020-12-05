import React, { useMemo, Fragment } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }:any) => {
    const root = useMemo(() => document.createElement('div'), [])
    return ReactDOM.createPortal(<Fragment>{children}</Fragment>, root)
  }

  export default Portal;