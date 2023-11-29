import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider, createTheme, ColorSchemeScript } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ColorSchemeScript />
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </>
);
