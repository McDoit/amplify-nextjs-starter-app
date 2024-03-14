import { Stack } from "@mui/material";
import * as React from "react";
import { FilterButton, FilterButtonItem } from "./FilterButton";

export interface FilterButtonsProps {
  items: FilterButtonItem[];
  activeButton?: number;
  setActive: (value: number) => void;
}

export function FilterButtons(props: FilterButtonsProps) {
  return (
    <Stack direction="row" mx={0} my={2} spacing={2}>
      {props.items.map((item, index) => (
        <FilterButton
          key={index}
          id={index}
          label={item.label}
          text={item.text}
          isActive={props.activeButton === index}
          setActive={props.setActive}
        />
      ))}
    </Stack>
  );
}
