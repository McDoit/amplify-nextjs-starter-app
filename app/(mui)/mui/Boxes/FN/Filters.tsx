import {
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import * as React from "react";
import { Filter } from "../../Filters/components/Filter";
import { FilterButtonItem } from "../../Filters/components/FilterButton";
import { FilterButtons } from "../../Filters/components/FilterButtons";
import { FilterGroup } from "../../Filters/components/FilterGroup";
import {
  IFilterInfo,
  ISelectedFilter,
} from "../../Filters/utils/FilterStructure";
import { GenerateUrl } from "../../Filters/utils/FilterUtils";
import { FilterView } from "../../Filters/components/FilterView";
import { RenderFilter } from "../../Filters/utils/RenderFilter";
import SelectedFilters, {
  ISelectedFiltersParameter,
} from "../../Filters/components/SelectedFilters";

//const data: IFilterInfo = require("../utils/filterData.json");

interface FiltersProps {
  data: IFilterInfo;
  toogleHeader: () => void;
}

export default function Filters(props: FiltersProps) {
  const data = props.data;

  var [activeFilter, setActiveFilter] = React.useState<number | undefined>(
    undefined
  );

  var [selectedFilters, setSelectedFilters] = React.useState(
    data.selectedFilters
  );

  const filterButtons: FilterButtonItem[] = data.filterFamilies.map(
    (i) => ({ label: i.label, text: i.name } as FilterButtonItem)
  );

  const SetActive = (filter: number) => {
    if (activeFilter === filter) {
      setActiveFilter(undefined);
    } else {
      setActiveFilter(filter);
    }
  };

  const AddSelectedFilter = (value: ISelectedFiltersParameter) => {
    var entries = Object.entries(selectedFilters);

    entries.push([
      value.searchParameter,
      {
        label: value.label,
        value: value.value,
        filterFamilyKey: value.filterFamilyKey,
        filterType: value.filterType,
      },
    ]);

    var newObject = Object.fromEntries(entries);

    setSelectedFilters(newObject);
  };

  const RemoveSelectedFilter = (value: { searchParameter: string }) => {
    console.log("RemoveSelectedFilter");

    setSelectedFilters(
      (
        currentFilters:
          | { [s: string]: ISelectedFilter }
          | ArrayLike<ISelectedFilter>
      ) =>
        Object.fromEntries(
          Object.entries(currentFilters).filter(
            ([key, item]) => key !== value.searchParameter
          )
        )
    );
  };

  //let history = useHistory();

  const dividerRef = React.useRef(null);

  //  const hiddenDivider = <Divider sx={{ display: "block" }} ref={dividerRef} />;

  return (
    <Container sx={{ maxWidth: "965px", padding: 2 }} disableGutters>
      <Container disableGutters ref={dividerRef}>
        <FilterButtons
          items={filterButtons}
          setActive={SetActive}
          activeButton={activeFilter}
        />
      </Container>
      {/* {hiddenDivider} */}
      <Popper
        open={activeFilter !== undefined}
        anchorEl={dividerRef?.current ?? null}
        placement="bottom-start"
        //sx={{ zIndex: "1337" }}
        sx={{ zIndex: (theme) => theme.zIndex.modal - 1 }}
      >
        {/* <Box
          sx={{ backgroundColor: "blue", height: "150px", width: "300px" }}
        /> */}
        {activeFilter !== undefined && (
          <Paper variant="outlined" square sx={{ mt: "10px", width: "963px" }}>
            <Stack
              spacing={0}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              {data.filterFamilies.map(
                (filterFamily, i) =>
                  activeFilter === i && (
                    <FilterView heading={filterFamily.heading} key={i}>
                      {(filterFamily.key === "Family:0006jpMDrDlQbCxmcxCqbmxYL" //TODO fix when search
                        ? filterFamily.secondaryView ?? filterFamily.primaryView
                        : filterFamily.primaryView
                      ).groups.map((filterGroup) => (
                        <FilterGroup
                          key={filterGroup.key}
                          heading={filterGroup.label}
                        >
                          {filterGroup.filters.map((filter, i) => (
                            <Filter
                              heading={filter.label}
                              showLabel={filter.displaySettings.showLabel}
                              key={i}
                            >
                              {RenderFilter(
                                filter,
                                filterFamily,
                                selectedFilters,
                                AddSelectedFilter
                              )}
                            </Filter>
                          ))}
                        </FilterGroup>
                      ))}
                    </FilterView>
                  )
              )}
              <Paper elevation={0} square>
                <Box m={2} display="flex" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    onClick={() => {
                      var newUrl = "?" + GenerateUrl(selectedFilters);

                      window.location.search = newUrl;

                      //window.history.pushState({}, "Sök", newUrl);
                    }}
                  >
                    Visa utbildningar
                  </Button>
                </Box>
              </Paper>
            </Stack>
          </Paper>
        )}
      </Popper>
      <Button
        disableElevation={true}
        disableRipple={true}
        fullWidth={true}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
          cursor: "default",
          p: "0",
          maxWidth: "965px",
        }}
        onClick={() => props.toogleHeader()}
      >
        <Container sx={{ maxWidth: "965px" }} disableGutters>
          <Divider />
        </Container>
      </Button>
      <SelectedFilters
        selectedFilters={selectedFilters}
        onDelete={(k) => RemoveSelectedFilter({ searchParameter: k })}
      />
    </Container>
  );
}
