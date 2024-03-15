import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { HierarchyChip } from "./HierarchyChip";

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

export interface EmgHierarchyFilterProps {
  items: readonly RenderTree[];
  value?: string;
  onClick: (value: ChoiceItem) => void;
}

export interface CurrentParentTree {
  current: RenderTree;
  parent?: RenderTree;
}

export interface EnrichedChoiceItem extends ChoiceItem {
  hasChildren: boolean;
}

export interface PlainItem {
  current: ChoiceItem;
  children: EnrichedChoiceItem[];
  parent?: ChoiceItem;
}

//const outerPlainList: PlainItem[] = Array.of<PlainItem>();

export default function EmgHierarchyFilter(props: EmgHierarchyFilterProps) {
  // const initTree: CurrentParentTree = {
  //   current: {
  //     choiceItem: { label: "The Top", value: "0" },
  //     children: props.items,
  //   },
  // };

  const plainItem: PlainItem = {
    current: { label: "", value: "-1" },
    parent: undefined,
    children: props.items?.map((c) => ({
      hasChildren: Array.isArray(c.children) && c.children.length > 0,
      ...c.choiceItem,
    })),
  };

  const plainList: PlainItem[] = Array.of<PlainItem>();

  const buildPlainList = (currentNode: RenderTree, parentNode?: RenderTree) => {
    if (currentNode.children && currentNode.children.length > 0) {
      const item: PlainItem = {
        current: currentNode.choiceItem,
        parent: parentNode?.choiceItem ?? plainItem.current,
        children:
          currentNode.children?.map((c: RenderTree) => ({
            hasChildren: (c.children && c.children.length > 0) ?? false,
            label: c.choiceItem.label,
            value: c.choiceItem.value,
          })) ?? [],
      };

      plainList.push(item);

      currentNode.children.forEach((c) => buildPlainList(c, currentNode));
    }
  };

  //const [activeValue, setActiveValue] = React.useState(props.value);

  const [activeTree, setActiveTree] = React.useState<PlainItem>();

  plainList.push(plainItem);

  console.log(plainItem);

  //setActiveTree(plainItem);

  props.items.forEach((fe) => buildPlainList(fe));

  //plainList.forEach((fe) => outerPlainList.push(fe));

  React.useEffect(() => {
    // const plainItem: PlainItem = {
    //   current: { label: "", value: "-1" },
    //   parent: undefined,
    //   children: props.items?.map((c) => ({
    //     hasChildren: Array.isArray(c.children) && c.children.length > 0,
    //     ...c.choiceItem,
    //   })),
    // };

    plainList.push(plainItem);

    //console.log(plainItem);

    setActiveTree(plainItem);

    props.items.forEach((fe) => buildPlainList(fe));
  }, []);

  const SetActiveTree = (item: ChoiceItem | undefined) => {
    if (item) {
      var itemToSet = plainList.find((f) => item.value === f.current.value);

      setActiveTree(itemToSet);

      console.log(itemToSet);
      console.log(item);
      console.log(plainList);
    } else {
      setActiveTree(undefined);
    }

    //return item;
  };

  const renderTree = (plainItem: PlainItem) => (
    <Box
      key={plainItem?.current.value ?? plainItem?.current.label ?? "no-key"}
      // nodeId={currentNode.choiceItem.value ?? nodes.choiceItem.label}
      // label={nodes.choiceItem.label}
      // onClick={() => props.onClick(nodes.choiceItem)}
      sx={{
        display:
          plainItem.current.value === activeTree?.current.value
            ? "initial"
            : "none",
      }}
    >
      {plainItem?.current.value !== undefined &&
        plainItem?.current.label !== "" && (
          <React.Fragment>
            <Typography variant="body1" color="initial">
              <IconButton onClick={() => SetActiveTree(plainItem.parent)}>
                <ChevronLeftIcon />
              </IconButton>
              {plainItem.current.label}
            </Typography>

            <Divider sx={{ my: 2 }} />
          </React.Fragment>
        )}
      {Array.isArray(plainItem?.children) ? (
        <Grid container spacing={1}>
          {plainItem.children
            .sort((s1, s2) => {
              if (s1.label > s2.label) {
                return 1;
              }
              if (s1.label < s2.label) {
                return -1;
              }
              return 0;
            })
            .map((node) => (
              <Grid item xs={12} md={3} key={node.value}>
                <HierarchyChip
                  item={node}
                  onClick={() => {
                    props.onClick(node);
                  }}
                  onClickNext={() => SetActiveTree(node)}
                  variant={
                    props.value && props.value === node.value
                      ? "chosen"
                      : "outlined"
                  }
                />
              </Grid>
            ))}
        </Grid>
      ) : null}
    </Box>
  );

  // const renderTreeOld = (plainItem: PlainItem) => (
  //   <Box
  //     key={plainItem?.current.value ?? plainItem?.current.label ?? "no-key"}
  //     // nodeId={currentNode.choiceItem.value ?? nodes.choiceItem.label}
  //     // label={nodes.choiceItem.label}
  //     // onClick={() => props.onClick(nodes.choiceItem)}
  //   >
  //     {plainItem?.parent && (
  //       <IconButton onClick={() => SetActiveTree(plainItem.parent)}>
  //         <ChevronLeftIcon />
  //       </IconButton>
  //     )}
  //     {plainItem?.current &&
  //       plainItem.current.value + ": " + plainItem.current.label}
  //     <Divider />
  //     {Array.isArray(plainItem?.children)
  //       ? plainItem.children
  //           .sort((s1, s2) => {
  //             if (s1.label > s2.label) {
  //               return 1;
  //             }
  //             if (s1.label < s2.label) {
  //               return -1;
  //             }
  //             return 0;
  //           })
  //           .map((node) => (
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 alignItems: "center",
  //                 //width: "fit-content",
  //                 width: "200px",
  //                 border: (theme) => `1px solid ${theme.palette.divider}`,
  //                 borderRadius: 1,
  //                 bgcolor: "background.paper",
  //                 color: "text.secondary",

  //                 "& svg": {
  //                   //m: 1.5
  //                 },
  //                 "& hr": {
  //                   //mx: 0.5
  //                 },
  //               }}
  //             >
  //               <Button sx={{ width: "stretch" }}>{node.label}</Button>
  //               {node.hasChildren && (
  //                 <React.Fragment>
  //                   <Divider orientation="vertical" flexItem />
  //                   <Button
  //                     sx={{ width: "10px" }}
  //                     onClick={() => SetActiveTree(node)}
  //                   >
  //                     <ChevronRightIcon />
  //                   </Button>
  //                 </React.Fragment>
  //               )}
  //             </Box>
  //           ))
  //       : null}
  //   </Box>
  // );

  // const renderTree2 = (currentNode: RenderTree, parentNode?: RenderTree) => {
  //   if (currentNode.choiceItem.value === activeValue) {
  //     setActiveTree({ current: currentNode, parent: parentNode });
  //   } else if (currentNode.children) {
  //     currentNode.children.forEach((fe) => renderTree2(fe, currentNode));
  //   }
  // };

  // const refreshActiveTree = (currentNode?: RenderTree) => {
  //   if (currentNode) {
  //     props.items.forEach((fe) => renderTree2(fe, initTree));
  //   } else {
  //     setActiveTree(initTree);
  //   }
  // };

  // React.useEffect(() => {
  //   if (props.value) {
  //     renderTree2(activeTree);
  //   }
  // }, [props.value]);

  return (
    <Container
      //aria-label="rich object"
      //defaultCollapseIcon={<ExpandMoreIcon />}
      //defaultExpanded={localItems}
      //expanded={localItems} //TODO indexof error
      //defaultExpandIcon={<ChevronRightIcon />}
      //selected={props.value ?? ""}
      //defaultSelected={["72", "4060"]}
      sx={{ flexGrow: 1, overflowY: "hidden" }}
    >
      {plainList.map((m) => renderTree(m))}
      {/* {renderTree(activeTree ?? plainItem)} */}
    </Container>
  );

  // return (
  //   <TreeView
  //     aria-label="rich object"
  //     defaultCollapseIcon={<ExpandMoreIcon />}
  //     //defaultExpanded={localItems}
  //     //expanded={localItems} //TODO indexof error
  //     defaultExpandIcon={<ChevronRightIcon />}
  //     selected={props.value ?? ""}
  //     //defaultSelected={["72", "4060"]}
  //     sx={{ maxHeight: 310, flexGrow: 1, overflowY: "auto" }}
  //   >
  //     {props.items.map((j) => renderTree(j))}
  //   </TreeView>
  // );
}
