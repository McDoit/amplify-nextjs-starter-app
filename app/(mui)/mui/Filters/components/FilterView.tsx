import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface FilterViewProps {
  heading?: string;
  children?: React.ReactNode | React.ReactNode[]; //TODO only filtergroups
}

export function FilterView(props: FilterViewProps) {
  return (
    <Paper elevation={0} square>
      <Typography m={2} variant="h6">
        {props.heading}
      </Typography>
      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        m={2}
      >
        {props.children}
      </Stack>
    </Paper>
  );
}
