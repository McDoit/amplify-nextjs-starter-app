"use client";
import { Container, Typography, Stack, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ApprovalIcon from "@mui/icons-material/Approval";
import React, { useEffect, useRef, useState } from "react";
//import Connector from "@devjaewoo/react-svg-connector";

export default function EducationJourney() {
  var ref1 = useRef<any>();
  var ref2 = useRef<any>();
  var ref3 = useRef<any>();

  const [draw, redraw] = useState(0);

  useEffect(() => {
    redraw(Math.random());
  }, [ref1, ref2, ref3]);

  return (
    <React.Fragment>
      {/* <Connector
        el1={ref1.current}
        el2={ref2.current}
        shape="line"
        direction="r2l"
        roundCorner={false}
        endArrow={true}
        stroke="red"
      />
      <Connector
        el1={ref2.current}
        el2={ref3.current}
        shape="line"
        direction="r2l"
        roundCorner={false}
        endArrow={true}
        stroke="red"
      /> */}
      <Container sx={{ paddingY: 2 }}>
        <Typography variant="h4" fontWeight="bold" align="center">
          Start your education journey here
        </Typography>
        <Stack direction="row">
          <Box>
            <Stack direction="row" marginY={2} spacing={0}>
              {/* <svg>
            <line
              x1="0"
              y1="25"
              x2="100"
              y2="25"
              stroke="green"
              strokeWidth="2"
            />
          </svg> */}
              <Stack
                ref={ref1}
                border={2}
                borderRadius={12}
                sx={{ width: 75, height: 75 }}
                alignContent="center"
                alignItems="center"
                justifyContent="center"
                marginX="auto"
              >
                <SearchIcon fontSize="large" />
              </Stack>
              {/* <Box sx={{float: "right", overflow: "auto" }}>
          <svg>
            <line
              x1="0"
              y1="25"
              x2="100"
              y2="25"
              stroke="red"
              strokeWidth="2"
            />
          </svg>
          </Box> */}
            </Stack>
            <Typography variant="h6" align="center" paddingBottom={2}>
              Discover
            </Typography>
            <Typography align="center" paddingBottom={2}>
              Browse thousands of degrees from around the world
            </Typography>
          </Box>
          <Box>
            <Stack
              ref={ref2}
              border={2}
              borderRadius={12}
              sx={{ width: 75, height: 75 }}
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              marginX="auto"
              marginY={2}
            >
              <Stack direction="row">
                <SearchIcon />
                <MenuIcon />
              </Stack>
              <Stack direction="row">
                <SearchIcon />
                <MenuIcon />
              </Stack>
            </Stack>
            <Typography variant="h6" align="center" paddingBottom={2}>
              Compare
            </Typography>
            <Typography align="center" paddingBottom={2}>
              See programs side by side to find the right one for you
            </Typography>
          </Box>
          <Box>
            <Stack
              ref={ref3}
              border={2}
              borderRadius={12}
              sx={{ width: 75, height: 75 }}
              alignContent="center"
              alignItems="center"
              justifyContent="center"
              marginX="auto"
              marginY={2}
            >
              <ApprovalIcon fontSize="large" />
            </Stack>
            <Typography variant="h6" align="center" paddingBottom={2}>
              Connect
            </Typography>
            <Typography align="center" paddingBottom={2}>
              Browse thousands of degrees from around the world
            </Typography>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
