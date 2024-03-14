import { Typography, Stack, Button } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

import * as React from "react";

export interface FilterButtonItem {
  label: string;
  text: string;
}

export interface FilterButtonProps {
  id: number;
  label: string;
  text: string;
  isActive: boolean;
  setActive: (value: number) => void;
}

export function FilterButton(props: FilterButtonProps) {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="body2">{props.label}</Typography>
      <Button
        variant={props.isActive ? "chosen" : "outlined"}
        sx={{
          color: "black",
          borderColor: (theme) => theme.palette.divider, //theme.palette.grey[400],
          "&:hover": {
            color: "black",
            borderColor: (theme) => theme.palette.divider // theme.palette.grey[400]
          }
        }}
        onClick={() => props.setActive(props.id)}
        endIcon={props.isActive ? <CloseIcon /> : <ExpandMoreIcon />}
      >
        {props.text}
      </Button>
    </Stack>
  );
}
