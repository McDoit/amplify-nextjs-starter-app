import {
  Typography,
  Stack,
  Button,
  Chip,
  Divider,
  Container,
  ButtonGroup,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import * as React from "react";
import { ChoiceItem, EnrichedChoiceItem } from "./EmgHierarchyFilter";

export interface HierarchyChipProps {
  item: EnrichedChoiceItem;
  variant?: "chosen" | "outlined";
  //text: string;
  //isActive: boolean;
  //setActive: (value: number) => void;
  onClick: (_: any) => void;
  onClickNext?: (_: any) => void;
}

export function HierarchyChip(props: HierarchyChipProps) {
  return (
    <ButtonGroup
      //color="secondary"
      fullWidth={true}
      size="small"
      variant={props.variant === "outlined" ? "emg-outlined" : "chosen"}
      aria-label="outlined button group"
      sx={{
        padding: "4px",
        margin: "0px",
        overflow: "clip",
        textOverflow: "clip",
        maxHeight: "min-content",
      }}
    >
      <Button
        onClick={props.onClick}
        sx={{
          width: "stretch",
          color: "black",
          borderColor: "black",
          overflow: "clip",
          textOverflow: "ellipsis",
          maxHeight: "min-content",
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
        title={props.item.label}
      >
        {props.item.label}
      </Button>
      {props.item.hasChildren && (
        <Button
          size="small"
          sx={{
            width: "fit-content",
            margin: "0px",
            color: "black",
            borderColor: "black",
            //paddingX: "5px",
          }}
          onClick={props.onClickNext}
        >
          <ChevronRightIcon sx={{ margin: "-1px" }} />
        </Button>
      )}
    </ButtonGroup>
  );

  // return (
  //   <Chip
  //     variant={props.variant ?? "outlined"}
  //     //color={activeChip === s ? "primary" : "default"}
  //     color={"default"}
  //     onClick={props.onClick}
  //     onDelete={
  //       props.item.hasChildren
  //         ? (val) => {
  //             console.log("no delete");
  //             props.onClickNext && props.onClickNext(val);
  //           }
  //         : undefined
  //     }
  //     label={props.item.label}
  //     key={props.item.value}
  //     //deleteIcon={<ChevronRightIcon />}
  //     deleteIcon={
  //       <Container disableGutters>
  //         <Divider orientation="vertical" flexItem />
  //         <ChevronRightIcon />
  //       </Container>
  //     }
  //   />
  // );
}
