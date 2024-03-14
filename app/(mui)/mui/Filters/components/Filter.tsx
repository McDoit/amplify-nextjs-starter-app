import { Container, Typography, Box } from "@mui/material";
import * as React from "react";

export interface FilterProps {
  heading?: string;
  children?: React.ReactNode;
  showLabel: boolean;
}

export function Filter(props: FilterProps) {
  return (
    <Container>
      {props.showLabel && (
        <Typography marginBottom={2}>{props.heading}</Typography>
      )}
      <Box>{props.children}</Box>
    </Container>
  );
}
