import { MDXProvider } from "@mdx-js/react";
import React, { PropsWithChildren } from "react";
import CodeBlock from "../ui/CodeBlock";

import styled from "styled-components";
import Card from "../ui/CodeCard";

interface CodeBlockProps {
  className: string,
  children: string
}

const H1 = styled.h1`
  color: ${({ theme: { colors } }) => colors.pink};
`;
const H2 = styled.h2`
  color: ${({ theme: { colors } }) => colors.green};
`;
const H3 = styled.h3`
  color: ${({ theme: { colors } }) => colors.purple};
`;
const H4 = styled.h4`
  color: ${({ theme: { colors } }) => colors.orange};
`;
const H5 = styled.h5`
  color: ${({ theme: { colors } }) => colors.yellow};
`;
const H6 = styled.h6`
  color: ${({ theme: { colors } }) => colors.red};
`;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  pre: (props: any) => {return (<div style={{maxWidth: '100vw'}} {...props} />)},
  code: ({children, className}: CodeBlockProps) => {
    return className ? (
      <Card>
        <CodeBlock className={className}>{children}</CodeBlock>
      </Card>
    ) : (
      <code>{children}</code>
    )
  }
};

export const ComponentsWrapper = ({ children }: PropsWithChildren) => (
  // @ts-ignore
  <MDXProvider components={components}>{children}</MDXProvider>
);
