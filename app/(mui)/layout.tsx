import type { Metadata } from "next";
//import NextLink from "next/link";
//import { Inter } from "next/font/google";

//import theme from "./theme";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { teal, pink } from "@mui/material/colors";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Link,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: teal[700],
//     },
//     secondary: {
//       main: pink[500],
//     },
//   },
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ANzkFFq3xUb9t9dIfRzQM-TorC9QIkS0bpxdi51Of2o"
        />
        <meta name="robots" content="index,follow" data-react-helmet="true" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&family=Raleway:wght@700;800&display=swap"
      rel="stylesheet"
    />
    {/* <!-- Icons to support Material Design --> */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
      </head>
      <body>
        {/* <AppRouterCacheProvider>
          <ThemeProvider theme={theme}> */}
            {children}
          {/* </ThemeProvider>
        </AppRouterCacheProvider> */}
      </body>
    </html>
  );
}