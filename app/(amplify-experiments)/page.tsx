"use client";

import Image from "next/image";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { teal, pink } from "@mui/material/colors";
import { AppBar, Toolbar, Typography, IconButton, Stack } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
//import config from '@/amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";

//Amplify.configure(config);

const theme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default function Home() {
  const [robots, setRobots] = useState<string>("index,follow");
  const [header, setHeader] = useState<string>("Index Me");

  const [loadingMessage, setLoadingMessage] = useState<string>("Loading Data");

  const searchParams = useSearchParams();

  const waitTime = Number.parseInt(searchParams.get("wait") || "2500");
  const loadTime = Number.parseInt(searchParams.get("load") || "2");

  useEffect(() => {
    setTimeout(() => {
      setRobots("noindex, nofollow");
      setHeader("Don't Index Me");
    }, waitTime);

    fetch(`https://httpbin.org/delay/${loadTime}`)
      .then((data) => {
        setLoadingMessage("Data is now loaded");
      })
      .catch((err) => {
        setLoadingMessage("Error loading data!");
        console.error(err);
      });
  }, [waitTime, loadTime]);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="robots" content={robots} />
      </Helmet>
      <main>
        <Authenticator></Authenticator>
      </main>
    </ThemeProvider>
  );
}
