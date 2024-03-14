export interface IFilter {
  key: string;
  type: string;
  label: string;
  searchParameter: string;
  value: any;
  displaySettings: any;
}

export interface IFilterGroup {
  key: string;
  label: string;
  helpText?: string;
  filters: IFilter[];
}

export interface IFilterView {
  key: string;
  groups: IFilterGroup[];
  switchLabel: string;
}

export interface IFilterFamily {
  key: string;
  label: string;
  name: string;
  heading: string;
  primaryView: IFilterView;
  secondaryView?: IFilterView;
}

export interface ISelectedFilter {
  label: string;
  value: any;
  filterFamilyKey: string;
  filterType: string;
}

export interface IFilterInfo {
  filterMode: string;
  filterFamilies: IFilterFamily[];
  selectedFilters: any; //TODO something like Map<string, ISelectedFilter>;
}
