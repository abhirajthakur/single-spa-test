import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Home from "./app/page";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorBoundary(err, info, props) {
    return err.name;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
