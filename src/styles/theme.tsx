import React, { PropsWithChildren } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Global from "./global";

export const theme: DefaultTheme = {
  colors: {
    background: "#282a36",
    surface: "#44475a",
    foreground: "#f8f8f2",
    comment: "#6272a4",
    cyan: "#8be9fd",
    green: "#50fa7b",
    orange: "#ffb86c",
    pink: "#ff79c6",
    purple: "#bd93f9",
    red: "#ff5555",
    yellow: "#f1fa8c",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }: PropsWithChildren) => (
  <>
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  </>
);

export default Theme;
