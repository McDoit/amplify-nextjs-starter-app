import * as React from "react";
import { ISelectedFilter } from "../utils/FilterStructure";
import { GenericChipList } from "./ChipList";

export interface SelectedFiltersProps {
  onDelete?: (item: string) => void;
  selectedFilters: any;
}

export interface SelectedFiltersItem {
  key: string;
  item: ISelectedFilter;
}

export interface ISelectedFiltersParameter extends ISelectedFilter {
  searchParameter: string;
}

const renderSelectedFilter = (value: SelectedFiltersItem): React.ReactNode => {
  if (value.item.filterType !== "date-range") {
    return value.item.label;
  }

  return value.item.value.from + " - " + value.item.value.to;
};

export default function SelectedFilters(props: SelectedFiltersProps) {
  const initData = Array.from(
    Object.entries(props.selectedFilters).values(),
    ([key, value]) => ({ key: key, item: value as ISelectedFilter })
  );

  //TODO make map
  var [selectedFilters, setSelectedFilters] = React.useState<
    SelectedFiltersItem[]
  >(initData);

  // const deleteSelectedLabel = (value: string) => {
  //   var newValues = selectedFilters.filter((f) => f.item.label !== value);

  //   setSelectedFilters(newValues);
  // };

  const deleteSelectedFilter = (value: SelectedFiltersItem) => {
    console.log("deleteSelectedFilter");
    var newValues = selectedFilters.filter((f) => f.key !== value.key);

    setSelectedFilters(newValues);

    if (props.onDelete) {
      console.log("deleteSelectedFilter-onDelete");
      props.onDelete(value.key);
    }
  };

  var selectedFiltersDeps = JSON.stringify(props.selectedFilters);

  React.useEffect(() => {
    //console.log("SelectedFilters");
    //console.log(props.selectedFilters);

    const updateData = Array.from(
      Object.entries(props.selectedFilters).values(),
      ([key, value]) => ({ key: key, item: value as ISelectedFilter })
    );

    setSelectedFilters(updateData);
  }, [selectedFiltersDeps]);

  return (
    <React.Fragment>
      {selectedFilters.length > 0 && (
        <GenericChipList<SelectedFiltersItem>
          items={selectedFilters}
          renderItem={renderSelectedFilter}
          onDelete={deleteSelectedFilter}
        />
      )}
    </React.Fragment>
  );
}
