import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";

export default function Home() {

  return (
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  );
}
