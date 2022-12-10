import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
    padding: 0;
    margin: 0;
  }
  a {
    color: ${(props) => props.theme.colors.cyan};
    text-shadow: none;
    background-image: none;
    text-shadow: none;
    background-image: none;
    margin: 0 0.2rem;
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    text-underline-offset: 0.2em;
    transition: text-decoration-color 300ms ease-in-out, text-underline-offset ease-in-out 300ms, color ease-in-out 800ms;
    :hover, :focus {
      color: ${(props) => props.theme.colors.cyan};
      background-size: 0 0.1em, 100% 0.1em;
      text-decoration-color: ${(props) => props.theme.colors.pink};
    }
  }
  h1 {
    color: ${(props) => props.theme.colors.foreground};
  }
  h2 {
    color: ${(props) => props.theme.colors.foreground};
  }
  h3 {
    color: ${(props) => props.theme.colors.foreground};
  }
  h4 {
    color: ${(props) => props.theme.colors.foreground};
  }
  h5 {
    color: ${(props) => props.theme.colors.foreground};
  }
  h6 {
    color: ${(props) => props.theme.colors.foreground};
  }
`;

export default GlobalStyle;
