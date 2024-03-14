import React from "react";
import { Container, Divider } from "@mui/material";

import { IFilterInfo } from "../../Filters/utils/FilterStructure";
import { MobileFilters2 } from "./MobileFilters";
import Filters from "./Filters";

export default function UnifiedFilters(data: IFilterInfo) {
  const [themeHeaderHidden, setThemeHeaderHidden] = React.useState(true);

  function toogleHeader() {
    setThemeHeaderHidden(!themeHeaderHidden);
  }

  return (
    <React.Fragment>
      <Container
        disableGutters
        sx={{ display: { xs: "none", md: "initial" }, maxWidth: "965px" }}
      >
        <Filters data={data} toogleHeader={toogleHeader} />
      </Container>
      <Container disableGutters sx={{ display: { xs: "block", md: "none" } }}>
        <MobileFilters2 {...data} />
      </Container>
    </React.Fragment>
  );
}
