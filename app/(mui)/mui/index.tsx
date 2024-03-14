import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";
import IndexMe from "./IndexMe";

var indexMePage: boolean = window.location.pathname === "/indexme";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {indexMePage ? <IndexMe /> : <Demo />}
    </StyledEngineProvider>
  </React.StrictMode>
);
