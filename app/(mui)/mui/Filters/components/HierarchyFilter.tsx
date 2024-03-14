import * as React from "react";
//import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import TreeItem from "@mui/lab/TreeItem";

export interface HierarchyFilterValue {
  items: readonly RenderTree[];
  parentSearchParameter: any;
}

export interface ChoiceItem {
  value?: string;
  label: string;
}

export interface RenderTree {
  choiceItem: ChoiceItem;
  children?: readonly RenderTree[];
}

export interface HierarchyFilterProps {
  items: readonly RenderTree[];
  value?: string;
  onClick: (value: ChoiceItem) => void;
}

// export default function HierarchyFilter(props: HierarchyFilterProps) {
//   const renderTree = (nodes: RenderTree) => (
//     <TreeItem
//       key={nodes.choiceItem.value ?? nodes.choiceItem.label}
//       nodeId={nodes.choiceItem.value ?? nodes.choiceItem.label}
//       label={nodes.choiceItem.label}
//       onClick={() => props.onClick(nodes.choiceItem)}
//     >
//       {Array.isArray(nodes.children)
//         ? nodes.children.map((node) => renderTree(node))
//         : null}
//     </TreeItem>
//   );

//   const expandedTree = (currentTree: RenderTree, value?: string): string[] => {
//     if (value === undefined) {
//       return [];
//     }

//     if (currentTree.choiceItem.value === value) {
//       // console.log("found it!");
//       // console.log(value);
//       return [value];
//     }

//     if (currentTree.children === undefined || currentTree.children.length === 0) {
//       return [];
//     }

//     for (const child of currentTree.children) {
//       var items = expandedTree(child, value);

//       if (items?.length > 0) {
//         if(currentTree.choiceItem.value) {
//         items.unshift(currentTree.choiceItem.value);
//         }

//         // console.log("going back");
//         // console.log(currentTree.choiceItem.value);

//         return items;
//       }
//     }

//     // var localItems: string[] = null;

//     // currentTree.children.forEach((m) => {
//     //   if (localItems !== null) {
//     //     return;
//     //   }

//     //   var items = expandedTree(m, value);

//     //   if (items?.length > 0) {
//     //     items.unshift(currentTree.choiceItem.value);

//     //     console.log("going back");
//     //     console.log(items);

//     //     localItems = items;
//     //   }
//     // });

//     // return null;
//   };

//   // var localItems: string[] = null;
//   // if (props.value) {
//   //   for (const child of props.items) {
//   //     var items = expandedTree(child, props.value);

//   //     if (items?.length > 0) {
//   //       localItems = items;
//   //       break;
//   //     }
//   //   }
//   // }

//   // //var ei = props.items.flatMap((m) => expandedTree(m, props.value));

//   // console.log(localItems);

//   return (
//     <TreeView
//       aria-label="rich object"
//       defaultCollapseIcon={<ExpandMoreIcon />}
//       //defaultExpanded={localItems}
//       //expanded={localItems} //TODO indexof error
//       defaultExpandIcon={<ChevronRightIcon />}
//       selected={props.value ?? ""}
//       //defaultSelected={["72", "4060"]}
//       sx={{ maxHeight: 310, flexGrow: 1, overflowY: "auto" }}
//     >
//       {props.items.map((j) => renderTree(j))}
//     </TreeView>
//   );
// }
