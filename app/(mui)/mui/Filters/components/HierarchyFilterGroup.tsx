import * as React from "react";
//import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import TreeItem from "@mui/lab/TreeItem";
import { FilterView } from "./FilterView";

export interface HierarchyFilterValue {
  items: readonly RenderTree[];
  parentSearchParameter: any;
}

export interface HierarchyFilterGroupProps {
  heading: string;
  items: readonly RenderTree[];
  onClick: (value: ChoiceItem) => void;
}

export interface ChoiceItem {
  value: string;
  label: string;
}

export interface RenderTree {
  choiceItem: ChoiceItem;
  children?: readonly RenderTree[];
}

// export default function HierarchyFilterGroup(props: HierarchyFilterGroupProps) {
//   const renderTree = (nodes: RenderTree) => (
//     <TreeItem
//       key={nodes.choiceItem.value}
//       nodeId={nodes.choiceItem.value}
//       label={nodes.choiceItem.label}
//       onClick={() => props.onClick(nodes.choiceItem)}
//     >
//       {Array.isArray(nodes.children)
//         ? nodes.children.map((node) => renderTree(node))
//         : null}
//     </TreeItem>
//   );

//   return (
//     <FilterView heading={props.heading}>
//       <TreeView
//         aria-label="rich object"
//         defaultCollapseIcon={<ExpandMoreIcon />}
//         defaultExpanded={["root"]}
//         defaultExpandIcon={<ChevronRightIcon />}
//         sx={{ maxHeight: 310, flexGrow: 1, overflowY: "auto" }}
//       >
//         {props.items.map((j) => renderTree(j))}
//       </TreeView>
//     </FilterView>
//   );
// }
