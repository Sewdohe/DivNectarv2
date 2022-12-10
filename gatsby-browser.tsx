import React from "react";
import Theme from "./src/styles/theme";
import Layout from "./src/components/ui/Layout"

export function wrapPageElement({ element, props }) {
  return (
    <Theme>
      <Layout>
        {element}
      </Layout>
    </Theme>
  );
}
