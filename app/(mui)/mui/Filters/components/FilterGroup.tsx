import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface FilterGroupProps {
  heading?: string;
  children?: React.ReactNode | React.ReactNode[]; //TODO only filters
}

export function FilterGroup(props: FilterGroupProps) {
  return (
    <Paper elevation={0} square>
      <Typography marginBottom={2} marginLeft={3}>
        {props.heading}
      </Typography>
      <Stack
        //spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        //m={2}
      >
        {props.children}
      </Stack>
    </Paper>
  );
}
