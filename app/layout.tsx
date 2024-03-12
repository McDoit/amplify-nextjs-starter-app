import type { Metadata } from "next";
import NextLink from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme";

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

const inter = Inter({ subsets: ["latin"] });

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
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Stack sx={{ flexGrow: 1 }} spacing={2} direction={"row"}>
                  <Button
                    href="/amplify"
                    color="inherit"
                    LinkComponent={NextLink}
                  >
                    Amplify
                  </Button>
                  <Button color="inherit" href="/" LinkComponent={NextLink}>
                    Content
                  </Button>
                  <Button
                    color="inherit"
                    href="/loadtest"
                    LinkComponent={NextLink}
                  >
                    Loadtest
                  </Button>
                </Stack>
              </Toolbar>
            </AppBar>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
