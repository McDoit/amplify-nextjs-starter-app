import ThemeProvider1 from "../theme/ThemeProvider1";
import { IFilterInfo } from "../utils/FilterStructure";
import UnifiedFilters from "./UnifiedFilters";

export interface ThemedFiltersProps {
    data: IFilterInfo;
    shadowRootElementId?: string;
    shadowRootElement?: HTMLDivElement;
}

export default function ThemedFilters(props: ThemedFiltersProps) {

    const shadowRootElement: HTMLDivElement | undefined = undefined;

    if(props.shadowRootElementId && document) {
     document.getElementById(props.shadowRootElementId) as HTMLDivElement;
    }

    //document.querySelector('#')

    return (
        <ThemeProvider1 root={props.shadowRootElement ?? shadowRootElement}>
            {/* <UnifiedFilters {...data} /> */}
            <UnifiedFilters {...props.data} />
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
