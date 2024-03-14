import { ISelectedFilter } from "./FilterStructure";

export const GenerateUrl = (selectedFilters: any): string => {
  return Object.entries(selectedFilters)
    .map(([k, v]) => {
      var item = v as ISelectedFilter;

      var itemValue: string = item.value;

      if (item.filterType === "range" || item.filterType === "date-range") {
        itemValue = item.value.from + "|" + item.value.to;

        itemValue = itemValue.split("-").join("");
        itemValue = itemValue.replace("|", "-");
      }

      return k + "=" + itemValue;
    })
    .join("&");
};

export const GetSelectedFilterLabel = (
  selectedFilter: ISelectedFilter
): string => {
  var item = selectedFilter;

  var itemValue: string = item.label;

  if (
    item.label === null &&
    (item.filterType === "range" || item.filterType === "date-range")
  ) {
    itemValue = item.value.from + " - " + item.value.to;
  }

  return itemValue;
};
