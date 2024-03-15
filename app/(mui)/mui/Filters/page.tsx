"use client";
import { Container, Divider, Skeleton, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { IFilterInfo } from "./utils/FilterStructure";
import UnifiedFilters from "../Boxes/FN/UnifiedFilters";

import { Helmet } from "react-helmet";

const data: IFilterInfo = require("../Filters/utils/filterData.json");

export default function FnSearchPage() {
  const [robots, setRobots] = React.useState<string>("index,follow");

  useEffect(() => {
    setTimeout(() => {
      setRobots("noindex, nofollow");
    }, 2500);
  }, []);

  return (
    <Container>
      <Helmet>
        <meta name="robots" content={robots} />
      </Helmet>
      <UnifiedFilters {...data} />

      <Stack spacing={2} sx={{ mb: 4 }}>
        <Divider />
        <Skeleton variant="rounded" height={100} />
        <Skeleton variant="rounded" height={100} />
        <Skeleton variant="rounded" height={100} />
        <Skeleton variant="rounded" height={100} />
      </Stack>
    </Container>
  );
}
