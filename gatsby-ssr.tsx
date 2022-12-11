import React from "react";
import Theme from "./src/styles/theme";
import Layout from "./src/components/ui/Layout"
import { ComponentsWrapper } from './src/components/util/MDXProvider'

export function wrapPageElement({ element, props }) {
  return (
    <Theme>
      <Layout>
        <ComponentsWrapper>
          {element}
        </ComponentsWrapper>
      </Layout>
    </Theme>
  );
}
