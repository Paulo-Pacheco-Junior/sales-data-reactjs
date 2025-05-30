import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import { NewSale } from "./pages/NewSale/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NewSale />
    </ThemeProvider>
  </React.StrictMode>
);
