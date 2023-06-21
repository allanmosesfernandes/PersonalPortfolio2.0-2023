import React from "react";
import Layout from "./src/components/layout";

// eslint-disable-next-line import/prefer-default-export
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PPNeueMachina/PPRegular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="machinaFont"
    />,
  ]);
}
