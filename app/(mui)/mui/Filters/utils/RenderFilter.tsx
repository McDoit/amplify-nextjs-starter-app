import { GenericChipList } from "../components/ChipList";
import BasicDateRangePicker from "../components/DateRangePicker";
import { EsrangeProps, Esrange } from "../components/EmgRangeSlider";
import { IFilter, IFilterFamily, ISelectedFilter } from "./FilterStructure";
//import HierarchyFilter from "../components/HierarchyFilter";
import { ChoiceItem, RenderTree } from "../components/HierarchyFilterGroup";
import { ISelectedFiltersParameter } from "../components/SelectedFilters";
import EmgHierarchyFilter from "../components/EmgHierarchyFilter";
import React from "react";

export interface RenderFilterProps {
  filter: IFilter;
  selectedFilter: ISelectedFilter;
  addSelectedFilter: ({ label, value }: { label: string; value: any }) => void;
}

export function RenderRangeFilter(props: RenderFilterProps) {
  var rangeProps = props.filter.value as EsrangeProps;

  rangeProps.from = props.selectedFilter?.value?.from;
  rangeProps.to = props.selectedFilter?.value?.to;

  rangeProps.onChange = (values) =>
    props.addSelectedFilter({
      label: values[0] + " - " + values[1] + " kr",
      value: { from: values[0], to: values[1] },
    });

  return <Esrange {...rangeProps} />;
}

export function RenderDateRangeFilter(props: RenderFilterProps) {
  console.log("props", props.selectedFilter);
  var fromDate = new Date(props.selectedFilter?.value?.from);
  var toDate = new Date(props.selectedFilter?.value?.to);

  console.log("dateArray", [fromDate, toDate]);
  return (
    <BasicDateRangePicker
      from={fromDate}
      to={toDate}
      onChange={(values) => {
        console.log(values);
        props.addSelectedFilter({
          label:
            values[0]?.toLocaleDateString("sv-SE") +
            " - " +
            values[1]?.toLocaleDateString("sv-SE"),
          value: {
            from: values[0]?.toLocaleDateString("sv-SE"),
            to: values[1]?.toLocaleDateString("sv-SE"),
            locale: "sv-SE",
            format: "med",
          },
        });
      }}
    />
  );
}

export function RenderChoiceFilter(props: RenderFilterProps) {
  var items: ChoiceItem[] = Array.from(props.filter.value.items);

  var item: ChoiceItem | undefined;

  if (props.selectedFilter) {
    item = items.find((f) => f.value === props.selectedFilter.value);
  }

  if (props.filter.displaySettings.defaultValueLabel) {
    //labels.unshift(filter.displaySettings.defaultValueLabel);
    //console.log("adding default value");
    //console.log(filter);
    items.unshift({
      label: props.filter.displaySettings.defaultValueLabel,
      value: "",
    });
  }

  return (
    <GenericChipList<ChoiceItem>
      onClick={(c) =>
        props.addSelectedFilter({
          label: c.label,
          value: c.value,
        })
      }
      renderItem={(i) => i.label}
      value={item}
      items={items}
    />
  );
}

export function RenderHierarchyFilter(props: RenderFilterProps) {
  const items: RenderTree[] = props.filter.value.items;

  return (
    <EmgHierarchyFilter
      key={props.filter.key}
      items={items}
      value={props.selectedFilter?.value}
      onClick={(c) =>
        props.addSelectedFilter({
          label: c.label,
          value: c.value,
        })
      }
    />
  );
}

export function RenderFilter(
  filter: IFilter,
  filterFamily: IFilterFamily,
  selectedFilters: any,
  addSelectedFilter: (value: ISelectedFiltersParameter) => void
) {
  const selectedFilter: ISelectedFilter =
    selectedFilters[filter.searchParameter];

  const addData = (props: { label: string; value: any }) => {
    addSelectedFilter({
      searchParameter: filter.searchParameter,
      filterType: filter.type,
      filterFamilyKey: filterFamily.key,
      label: props.label,
      value: props.value,
    });
  };

  if (filter.type === "range") {
    return RenderRangeFilter({
      filter,
      selectedFilter,
      addSelectedFilter: addData,
    });
  }
  if (filter.type === "date-range") {
    //console.log(filter);

    return RenderDateRangeFilter({
      filter,
      selectedFilter,
      addSelectedFilter: addData,
    });
  }
  if (filter.type === "choice") {
    //const labels: string[] = filter.value.items.map((i) => i.label);

    return RenderChoiceFilter({
      filter,
      selectedFilter,
      addSelectedFilter: addData,
    });
  }
  if (filter.type === "hierarchy") {
    return RenderHierarchyFilter({
      filter,
      selectedFilter,
      addSelectedFilter: addData,
    });
  }
}
