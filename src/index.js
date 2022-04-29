import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import MaterialUIPicker from "./MaterialUIPicker";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
    <MaterialUIPicker />
  </StyledEngineProvider>
);
