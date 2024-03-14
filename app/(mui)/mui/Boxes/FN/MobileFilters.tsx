import {
  Typography,
  Stack,
  Button,
  Divider,
  Container,
  Link,
  Dialog,
  IconButton,
  Paper,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import * as React from "react";
// import { styled } from "@mui/material/styles";
// import { red, green, blue } from "@mui/material/colors";
import { ChipList } from "../../Filters/components/ChipList";
import { Filter } from "../../Filters/components/Filter";
import { FilterGroup } from "../../Filters/components/FilterGroup";
import {
  IFilterFamily,
  IFilterInfo,
  ISelectedFilter,
} from "../../Filters/utils/FilterStructure";
import { RenderFilter } from "../../Filters/utils/RenderFilter";
import SelectedFilters, {
  ISelectedFiltersParameter,
} from "../../Filters/components/SelectedFilters";
import {
  GenerateUrl,
  GetSelectedFilterLabel,
} from "../../Filters/utils/FilterUtils";

//const data: IFilterInfo = require("../utils/filterData.json");

export interface FilterButtonItem {
  label: string;
  text: string;
}

export interface MobileFiltersProps {}

// const Root = styled("div")(({ theme }) => ({
//   //padding: theme.spacing(0),
//   [theme.breakpoints.down("md")]: {
//     backgroundColor: red[500]
//   },
//   [theme.breakpoints.up("md")]: {
//     backgroundColor: blue[500]
//   },
//   [theme.breakpoints.up("lg")]: {
//     backgroundColor: green[500]
//   }
// }));

export function MobileFilters(data: IFilterInfo) {
  const [filterOpen, setFilterOpen] = React.useState(false);

  console.log(window.location);

  const filterItems = [
    "Ämne",
    "Plats",
    "Pris, datum & längd",
    "Utbildningsform",
    "Fler filter",
  ];
  return (
    <React.Fragment>
      <Stack m={2} spacing={2}>
        <Button
          fullWidth={true}
          startIcon={<TuneIcon />}
          variant="contained"
          onClick={() => setFilterOpen(!filterOpen)}
          //sx={{ fontSize: 20 }}
        >
          Filtrera
        </Button>
        <Container fixed disableGutters>
          <ChipList
            labels={["Teknik", "2-3 Dagar", "17162 - 88710 Kr"]}
            onDelete={() => {}}
          />
        </Container>
      </Stack>
      <Dialog open={filterOpen} fullScreen={true}>
        <Container
          fixed
          disableGutters
          // sx={{
          //   height: "100%",
          //   width: "100%",
          //   position: "absolute",
          // }}
        >
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
            sx={{ height: "100%" }}
          >
            <Container fixed disableGutters>
              <Stack direction="column" spacing={0}>
                <Container fixed>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mr={1}
                    mt={2}
                    mb={1}
                  >
                    <IconButton onClick={() => setFilterOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="body2">Filter & Sortering</Typography>
                    <Link>Rensa</Link>
                  </Stack>
                </Container>
                <Divider />
                <Container sx={{ height: "120px", overflowY: "scroll" }}>
                  <Typography>Sortera</Typography>
                  <ChipList
                    labels={[
                      "Högst betyg",
                      "Pris (lägst - högst)",
                      "Pris (högst - lägst)",
                      "Närmaste startdatum",
                      "Längd (kort - långt)",
                      "Längd (långt - kort)",
                      "Highest amount of reviews",
                      "Highest relevance",
                      "Sortera efter betyg",
                    ]}
                    onClick={() => {}}
                  />
                </Container>
                <Divider />
                {filterItems.map((f) => (
                  <React.Fragment key={f}>
                    <Button fullWidth={true}>
                      <Container fixed>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={0}
                          my={1}
                          sx={{ color: "black" }}
                        >
                          <Typography variant="body1">{f}</Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </Container>
                    </Button>
                    <Divider />
                  </React.Fragment>
                ))}
              </Stack>
            </Container>
            <Container disableGutters>
              <Divider />
              {/* <Root> */}
              <Container sx={{ my: 2 }}>
                <Button variant="contained" fullWidth={true}>
                  Visa 480 utbildningar
                </Button>
              </Container>
              {/* </Root> */}
            </Container>
          </Stack>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}

export function MobileFilters2(data: IFilterInfo) {
  var [activeFilter, setActiveFilter] = React.useState<number | undefined>(
    undefined
  );

  var [selectedFilters, setSelectedFilters] = React.useState(
    data.selectedFilters
  );

  const [filterOpen, setFilterOpen] = React.useState(false);

  const SetActive = (filter: number | undefined) => {
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
      (currentFilters: { [s: string]: unknown } | ArrayLike<unknown>) =>
        Object.fromEntries(
          Object.entries(currentFilters).filter(
            ([key, item]) => key !== value.searchParameter
          )
        )
    );
  };

  const GetSelectedFiltersForFilterFamily = (
    filterFamily: IFilterFamily
  ): ISelectedFilter[] => {
    var filters = Object.entries(selectedFilters)
      .map(([key, item]) => item as ISelectedFilter)
      .filter((f) => f.filterFamilyKey === filterFamily.key);

    return filters;
  };

  //let history = useHistory();

  return (
    <React.Fragment>
      <Stack m={2} spacing={2}>
        <Button
          fullWidth={true}
          startIcon={<TuneIcon />}
          variant="contained"
          onClick={() => setFilterOpen(!filterOpen)}
          //sx={{ fontSize: 20 }}
        >
          Filtrera
        </Button>
        <Container fixed disableGutters>
          <SelectedFilters
            selectedFilters={selectedFilters}
            onDelete={(k) => RemoveSelectedFilter({ searchParameter: k })}
          />
        </Container>
      </Stack>
      <Dialog open={filterOpen} fullScreen={true}>
        <Container
          //fixed
          disableGutters
          // sx={{
          //   height: "100%",
          //   width: "100%",
          //   position: "absolute",
          // }}
        >
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
            sx={{ height: "100%" }}
          >
            <Container disableGutters>
              <Stack direction="column" spacing={0}>
                <Container>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mr={1}
                    mt={2}
                    mb={1}
                  >
                    <IconButton onClick={() => setFilterOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="body2">Filter & Sortering</Typography>
                    <Button variant="text">Rensa</Button>
                  </Stack>
                </Container>
                <Divider />
                <Container sx={{ height: "120px", overflowY: "auto" }}>
                  <Typography>Sortera</Typography>
                  <ChipList
                    labels={[
                      "Högst betyg",
                      "Pris (lägst - högst)",
                      "Pris (högst - lägst)",
                      "Närmaste startdatum",
                      "Längd (kort - långt)",
                      "Längd (långt - kort)",
                      "Highest amount of reviews",
                      "Highest relevance",
                      "Sortera efter betyg",
                    ]}
                    onClick={() => {}}
                  />
                </Container>
                <Divider />
                {data.filterFamilies.map((ff, i) => {
                  var familyValues = GetSelectedFiltersForFilterFamily(ff);

                  return (
                    <React.Fragment key={ff.label}>
                      <Button fullWidth={true} onClick={() => SetActive(i)}>
                        <Container>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={0}
                            my={1}
                            sx={{ color: "black" }}
                          >
                            <Typography variant="body1">{ff.label}</Typography>
                            <ChevronRightIcon />
                          </Stack>
                          {familyValues.length > 0 && (
                            <Typography
                              variant="subtitle2"
                              mb={1}
                              textAlign="left"
                              sx={{ color: "black" }}
                            >
                              {familyValues
                                .map((m) => GetSelectedFilterLabel(m))
                                .join(", ")}
                            </Typography>
                          )}
                        </Container>
                      </Button>
                      <Divider />
                    </React.Fragment>
                  );
                })}
              </Stack>
            </Container>
            <Container disableGutters>
              <Divider />
              {/* <Root> */}
              <Container sx={{ my: 2 }}>
                <Button
                  variant="contained"
                  fullWidth={true}
                  onClick={() => {
                    var newUrl = "?" + GenerateUrl(selectedFilters);

                    setFilterOpen(false);
                    SetActive(undefined);

                    console.log(window.location);

                    window.location.search = newUrl;

                    //window.history.pushState({}, "Sök", newUrl);
                  }}
                >
                  Visa utbildningar
                </Button>
              </Container>
              {/* </Root> */}
            </Container>
          </Stack>
        </Container>
        <Container>
          <Dialog
            open={activeFilter !== undefined}
            fullScreen={true}
            //sx={{ zIndex: (theme) => theme.zIndex.modal - 1 }}
          >
            <Paper elevation={0}>
              <Stack
                spacing={0}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                {data.filterFamilies.map(
                  (ff, i) =>
                    activeFilter === i && (
                      <React.Fragment key={i}>
                        <Container fixed>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mr={1}
                            mt={2}
                            mb={1}
                          >
                            <IconButton
                              onClick={() => setActiveFilter(undefined)}
                            >
                              <ChevronLeftIcon />
                            </IconButton>
                            <Typography variant="body2">
                              {ff.heading}
                            </Typography>
                            <Link>Rensa</Link>
                          </Stack>
                        </Container>
                        {/* <FilterView heading={ff.heading} key={i}> */}
                        {(ff.key === "Family:0006jpMDrDlQbCxmcxCqbmxYL"
                          ? ff.secondaryView ?? ff.primaryView
                          : ff.primaryView
                        ).groups.map((g) => (
                          <React.Fragment key={g.key}>
                            <Container
                              disableGutters
                              sx={{ marginTop: 1, marginBottom: 1 }}
                            >
                              <Divider />
                            </Container>
                            <FilterGroup key={g.key} heading={g.label}>
                              {g.filters.map((f, i) => (
                                <Filter
                                  heading={f.label}
                                  showLabel={f.displaySettings.showLabel}
                                  key={i}
                                >
                                  {RenderFilter(
                                    f,
                                    ff,
                                    selectedFilters,
                                    AddSelectedFilter
                                  )}
                                </Filter>
                              ))}
                            </FilterGroup>
                          </React.Fragment>
                        ))}
                        {/* </FilterView> */}
                      </React.Fragment>
                    )
                )}
              </Stack>
            </Paper>
          </Dialog>
        </Container>
      </Dialog>
    </React.Fragment>
  );
}
