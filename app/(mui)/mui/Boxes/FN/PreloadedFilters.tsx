import { IFilterInfo } from "../../Filters/utils/FilterStructure";
import UnifiedFilters from "./UnifiedFilters";

const data: IFilterInfo = require("../utils/filterData.json");

export default function PreloadedFilters() {
  return <UnifiedFilters {...data} />;
}
