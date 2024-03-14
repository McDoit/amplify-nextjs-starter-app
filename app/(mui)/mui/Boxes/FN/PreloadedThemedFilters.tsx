import ThemeProvider1 from "../theme/ThemeProvider1";
import { IFilterInfo } from "../utils/FilterStructure";
import UnifiedFilters from "./UnifiedFilters";

const data: IFilterInfo = require("../utils/filterData.json");

export interface PreloadedThemedFiltersProps {
  shadowRootElement: HTMLDivElement;
}

export default function PreloadedThemedFilters(props: PreloadedThemedFiltersProps) {
  return (
      <ThemeProvider1 root={props.shadowRootElement}>
          {/* <UnifiedFilters {...data} /> */}
          <UnifiedFilters {...data} />
          {/* <CssBaseline /> */}
          {/* <Container disableGutters sx={{ display: { xs: "none", md: "block" } }}>
          <ThemeHeader />
          <Divider />
          <Filters {...data} />
          </Container>
          <Container disableGutters sx={{ display: { xs: "block", md: "none" } }}>
          <MobileFilters2 {...data} />
          </Container> */}
    </ThemeProvider1>
  );
}
