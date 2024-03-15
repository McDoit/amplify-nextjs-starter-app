import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Box,
  Badge,
  SvgIcon,
  Button,
  FormControl,
  Select,
  MenuItem,
  Link,
  IconButton,
  Drawer,
  Popover,
  Divider,
  darken,
  Menu,
} from "@mui/material";
import React from "react";
import { atom, Atom, useAtom } from "jotai";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";

const sites = [
  "Master",
  "PhD",
  "Law",
  "Bachelor",
  "MBA",
  "Healthcare",
  "Courses",
  "Online",
];

const types = [
  "Bachelor of Laws",
  "Master of Laws",
  "PhD",
  "Juris Doctor",
  "Course",
  "MLS",
  "SJD",
  "Certificate",
  "Diploma",
  "Online Degree",
  "Universities",
  "Scholarships",
  "Student Resources",
];

const menuOpenAtom = atom(false);

export default function Header({
  savedEducations,
  comparedEducations,
  openThemeDialog,
}: {
  savedEducations: Atom<string[]>;
  comparedEducations: Atom<string[]>;
  openThemeDialog: any;
}) {
  const [savedEducationsCount] = useAtom(savedEducations);
  const [comparedEducationsCount] = useAtom(comparedEducations);

  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);

  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const langOpen = Boolean(langAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setLangAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0} sx={{ paddingY: 1 }}>
        <Toolbar>
          <Container disableGutters>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={[3, 3, 1]}>
                <IconButton
                  sx={{
                    display: { xs: "block", md: menuOpen ? "block" : "none" },
                    ////paddingRight: 3,
                  }}
                  color="inherit"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <CloseIcon fontSize="large" />
                  ) : (
                    <MenuIcon fontSize="large" />
                  )}
                </IconButton>
                <Box>
                  <img
                    src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_115/dpr_2.0/v1702998850/keystone_logos/interim_logos_light_svg/Lawstudies_RGB_Light_lnplgb.svg"
                    width="145"
                    height="32"
                    alt="Keystone logo"
                    style={{ height: 32 }}
                    loading="lazy"
                  />
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton color="inherit" onClick={openThemeDialog}>
                  <PaletteOutlinedIcon />
                </IconButton>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                  <Badge
                    badgeContent={comparedEducationsCount.length}
                    color={"emphasis"}
                    showZero
                  >
                    <SvgIcon color="info">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_6039_4427" fill="white">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.745 3.125C23.745 4.85089 22.3462 6.25 20.6207 6.25C18.8952 6.25 17.4963 4.85089 17.4963 3.125C17.4963 1.39911 18.8952 0 20.6207 0C22.3462 0 23.745 1.39911 23.745 3.125ZM24.1434 7.50174L0 13.9709L0.647038 16.3857L12.5003 13.2097L4.99895 25H22.4953L14.6307 12.6388L24.7905 9.91652L24.1434 7.50174ZM4.99895 11.2497C7.7598 11.2497 9.9979 9.01112 9.9979 6.24969C9.9979 3.48827 7.7598 1.24969 4.99895 1.24969C2.23811 1.24969 0 3.48827 0 6.24969C0 9.01112 2.23811 11.2497 4.99895 11.2497Z"
                          ></path>
                        </mask>
                        <path
                          d="M0 13.9709L-0.569401 11.8459L-2.69444 12.4153L-2.12504 14.5403L0 13.9709ZM24.1434 7.50174L26.2685 6.93234L25.6991 4.80731L23.574 5.37671L24.1434 7.50174ZM0.647038 16.3857L-1.478 16.9551L-0.908597 19.0802L1.21644 18.5108L0.647038 16.3857ZM12.5003 13.2097L14.3565 14.3906L17.3906 9.6217L11.9309 11.0846L12.5003 13.2097ZM4.99895 25L3.14279 23.819L0.991722 27.2H4.99895V25ZM22.4953 25V27.2H26.5025L24.3515 23.819L22.4953 25ZM14.6307 12.6388L14.0613 10.5138L11.165 11.2899L12.7746 13.8198L14.6307 12.6388ZM24.7905 9.91652L25.3599 12.0416L27.4849 11.4722L26.9155 9.34712L24.7905 9.91652ZM20.6207 8.45C23.5617 8.45 25.945 6.06548 25.945 3.125H21.545C21.545 3.6363 21.1307 4.05 20.6207 4.05V8.45ZM15.2963 3.125C15.2963 6.06548 17.6797 8.45 20.6207 8.45V4.05C20.1106 4.05 19.6963 3.6363 19.6963 3.125H15.2963ZM20.6207 -2.2C17.6797 -2.2 15.2963 0.184518 15.2963 3.125H19.6963C19.6963 2.6137 20.1106 2.2 20.6207 2.2V-2.2ZM25.945 3.125C25.945 0.184519 23.5617 -2.2 20.6207 -2.2V2.2C21.1307 2.2 21.545 2.6137 21.545 3.125H25.945ZM0.569401 16.096L24.7128 9.62678L23.574 5.37671L-0.569401 11.8459L0.569401 16.096ZM2.77207 15.8163L2.12504 13.4015L-2.12504 14.5403L-1.478 16.9551L2.77207 15.8163ZM11.9309 11.0846L0.0776368 14.2607L1.21644 18.5108L13.0697 15.3347L11.9309 11.0846ZM6.85512 26.181L14.3565 14.3906L10.6442 12.0287L3.14279 23.819L6.85512 26.181ZM22.4953 22.8H4.99895V27.2H22.4953V22.8ZM12.7746 13.8198L20.6391 26.181L24.3515 23.819L16.4869 11.4579L12.7746 13.8198ZM24.2211 7.79149L14.0613 10.5138L15.2001 14.7639L25.3599 12.0416L24.2211 7.79149ZM22.0184 8.07115L22.6654 10.4859L26.9155 9.34712L26.2685 6.93234L22.0184 8.07115ZM7.7979 6.24969C7.7979 7.79653 6.54434 9.0497 4.99895 9.0497V13.4497C8.97526 13.4497 12.1979 10.2257 12.1979 6.24969H7.7979ZM4.99895 3.44969C6.54434 3.44969 7.7979 4.70286 7.7979 6.24969H12.1979C12.1979 2.27368 8.97526 -0.950305 4.99895 -0.950305V3.44969ZM2.2 6.24969C2.2 4.70286 3.45357 3.44969 4.99895 3.44969V-0.950305C1.02265 -0.950305 -2.2 2.27368 -2.2 6.24969H2.2ZM4.99895 9.0497C3.45357 9.0497 2.2 7.79653 2.2 6.24969H-2.2C-2.2 10.2257 1.02265 13.4497 4.99895 13.4497V9.0497Z"
                          fill="white" //TODO theme color
                          mask="url(#path-1-inside-1_6039_4427)"
                        ></path>
                      </svg>
                    </SvgIcon>
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge
                    badgeContent={savedEducationsCount.length}
                    color="emphasis"
                    showZero
                  >
                    <FavoriteBorderIcon sx={{ marginR: 2 }} />
                  </Badge>
                </IconButton>
                <Button
                  variant="outlined"
                  sx={{
                    display: { xs: "none", md: "inline-flex" },
                    whiteSpace: "nowrap",
                    backgroundColor: (theme) => theme.palette.background.paper,
                    ["&:hover"]: {
                      backgroundColor: (theme) =>
                        darken(theme.palette.background.paper, 0.2),
                    },
                  }}
                  startIcon={<AccountCircleOutlinedIcon />}
                >
                  Sign in
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    display: { xs: "none", md: "inline-flex" },
                    whiteSpace: "nowrap",
                    backgroundColor: (theme) => theme.palette.background.paper,
                    ["&:hover"]: {
                      backgroundColor: (theme) =>
                        darken(theme.palette.background.paper, 0.2),
                    },
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      {/* <Popover open={menuOpen} onClose={() => setMenuOpen(false)}>
        THIS IS POPOVER
      </Popover> */}
      {menuOpen && false && (
        <Container
          sx={{
            position: "fixed",
            height: "100vh",
            minWidth: "100vw",
            backgroundColor: "red",
            zIndex: 1000,
          }}
        >
          This is container
        </Container>
      )}
      <Drawer
        //hideBackdrop={true}
        //variant="persistent"
        ModalProps={{
          sx: {
            width: "100vw",
            height: "100vh",
            zIndex: (theme) => theme.zIndex.appBar - 1,
          },
        }}
        PaperProps={{
          sx: {
            overflowY: "hidden",
          },
        }}
        variant="temporary"
        sx={{
          flexShrink: 0,
          width: "100%",
          height: "100%",
          zIndex: (theme) => theme.zIndex.appBar - 1,
          scrollbarGutter: "stable",
        }}
        anchor="top"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <Toolbar
          variant="dense"
          sx={{
            paddingY: 1,
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        />
        <AppBar position="static" elevation={0}>
          <Toolbar>
            {" "}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              //spacing={3}
            >
              {sites.map(
                (
                  m,
                  i //TODO remove slice and use real data
                ) =>
                  m === "Law" ? (
                    <Link
                      key={i}
                      color="inherit"
                      underline="none"
                      variant="button"
                      fontSize={16}
                      height="auto"
                      sx={{
                        borderBottom: "2px solid",
                        //marginTop: "8px",
                        marginBottom: "-12px",
                        paddingBottom: "10px",
                        marginRight: "12px",
                        //fontWeight: "bold",
                      }}
                    >
                      {m}
                    </Link>
                  ) : (
                    <Link
                      //color="inherit"
                      key={i}
                      underline="none"
                      variant="button"
                      fontSize={16}
                      height="auto"
                      sx={{
                        //borderBottom: "2px solid",
                        //marginTop: "8px",
                        //paddingBottom: "10px",
                        marginRight: "12px",
                        //fontWeight: "bold",
                      }}
                    >
                      {m}
                    </Link>
                  )
              )}
            </Stack>
          </Toolbar>
        </AppBar>
        <Container
          sx={{ backgroundColor: "secondary.main" }}
          ///color="secondary"
        ></Container>
        <Container
          sx={{ backgroundColor: "primary.main", overflowY: "auto" }}
          color="white"
        >
          <Stack>
            <Stack>
              {types.map((m) => (
                <Button key={m} sx={{ color: "white" }}>
                  {m}
                </Button>
              ))}
            </Stack>

            <Divider sx={{ borderColor: "white" }} />
            <Stack
              spacing={2}
              direction={"row"}
              alignItems="center"
              justifyContent="center"
              paddingY={2}
            >
              <Button
                variant="outlined"
                sx={{
                  whiteSpace: "nowrap",
                  backgroundColor: "white",
                  ["&:hover"]: {
                    backgroundColor: darken("#fff", 0.2),
                  },
                }}
                startIcon={<AccountCircleOutlinedIcon />}
              >
                Sign in
              </Button>
              <Button
                variant="outlined"
                sx={{
                  whiteSpace: "nowrap",
                  backgroundColor: "white",
                  ["&:hover"]: {
                    backgroundColor: darken("#fff", 0.2),
                  },
                }}
              >
                Register
              </Button>
            </Stack>
            <Divider sx={{ borderColor: "white" }} />
            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center"
              paddingY={2}
            >
              <Button
                color="inherit"
                variant="outlined"
                startIcon={<AccountBalanceOutlinedIcon />}
                sx={{
                  whiteSpace: "nowrap",
                  color: "white",
                  borderColor: "white",
                }}
              >
                List your programs
              </Button>
            </Stack>
            <Divider sx={{ borderColor: "white" }} />

            <Stack
              spacing={2}
              alignItems="center"
              justifyContent="center"
              paddingY={2}
            >
              <Button
                fullWidth={false}
                color="inherit"
                sx={{
                  whiteSpace: "nowrap",
                  color: "white",
                  borderColor: "white",
                }}
                endIcon={langOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                onClick={handleClick}
              >
                English (US)
              </Button>
            </Stack>
            {/* <Menu
              keepMounted
              id="lang-menu"
              anchorEl={langAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={langOpen}
              onClose={handleClose}
              disableScrollLock={true}
              PaperProps={{
                style: {
                  maxHeight: 300,
                  width: "20ch",
                },
              }}
            >
              <MenuItem value={10}>English (US)</MenuItem>
              <MenuItem value={20}>Dansk</MenuItem>
              <MenuItem value={20}>Eesti</MenuItem>
              <MenuItem value={10}>English (UK)</MenuItem>
              <MenuItem value={10}>English (AUS)</MenuItem>
              <MenuItem value={20}>Italiano</MenuItem>
              <MenuItem value={20}>Magyar</MenuItem>
              <MenuItem value={20}>Melayu</MenuItem>
              <MenuItem value={20}>Nederlands</MenuItem>
              <MenuItem value={20}>Norsk</MenuItem>
              <MenuItem value={20}>Polski</MenuItem>
              <MenuItem value={20}>Suomi</MenuItem>
              <MenuItem value={30}>Svenska</MenuItem>
            </Menu> */}
          </Stack>
        </Container>
      </Drawer>
      <AppBar
        sx={{ display: { xs: "none", md: "block" } }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Container disableGutters>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                //spacing={3}
              >
                {sites.map(
                  (
                    m,
                    i //TODO remove slice and use real data
                  ) =>
                    m === "Law" ? (
                      <Link
                        key={i}
                        color="inherit"
                        underline="none"
                        variant="button"
                        fontSize={16}
                        height="auto"
                        sx={{
                          borderBottom: "2px solid",
                          //marginTop: "8px",
                          marginBottom: "-12px",
                          paddingBottom: "10px",
                          marginLeft: "8px",
                          marginRight: "4px",
                          //fontWeight: "bold",
                        }}
                      >
                        {m}
                      </Link>
                    ) : (
                      <Link
                        //color="inherit"
                        key={i}
                        underline="none"
                        variant="button"
                        fontSize={16}
                        height="auto"
                        sx={{
                          //borderBottom: "2px solid",
                          //marginTop: "8px",
                          //paddingBottom: "10px",
                          marginLeft: "8px",
                          marginRight: "4px",
                          //fontWeight: "bold",
                        }}
                      >
                        {m}
                      </Link>
                    )
                )}
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
              >
                <Button
                  color="inherit"
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                  endIcon={
                    langOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                  }
                  onClick={handleClick}
                >
                  English (US)
                </Button>
                <Menu
                  keepMounted
                  id="lang-menu"
                  anchorEl={langAnchorEl}
                  open={langOpen}
                  onClose={handleClose}
                  disableScrollLock={true}
                  PaperProps={{
                    style: {
                      maxHeight: 300,
                      width: "20ch",
                    },
                  }}
                >
                  <MenuItem value={10}>English (US)</MenuItem>
                  <MenuItem value={20}>Dansk</MenuItem>
                  <MenuItem value={20}>Eesti</MenuItem>
                  <MenuItem value={10}>English (UK)</MenuItem>
                  <MenuItem value={10}>English (AUS)</MenuItem>
                  <MenuItem value={20}>Italiano</MenuItem>
                  <MenuItem value={20}>Magyar</MenuItem>
                  <MenuItem value={20}>Melayu</MenuItem>
                  <MenuItem value={20}>Nederlands</MenuItem>
                  <MenuItem value={20}>Norsk</MenuItem>
                  <MenuItem value={20}>Polski</MenuItem>
                  <MenuItem value={20}>Suomi</MenuItem>
                  <MenuItem value={30}>Svenska</MenuItem>
                </Menu>
                {/* <FormControl
                  size="small"
                  variant="standard"
                  sx={{ color: "white" }}
                >
                  <Select
                    label="Age"
                    value={10}
                    sx={{ color: "white" }}
                    IconComponent={(props) => (
                      <ArrowDropDownIcon sx={{ color: "white" }} />
                    )}
                  >
                    <MenuItem value={10}>English (US)</MenuItem>
                    <MenuItem value={20}>Italiano</MenuItem>
                    <MenuItem value={30}>Svenska</MenuItem>
                  </Select>
                </FormControl>
                 */}
                <Button
                  color="inherit"
                  variant="outlined"
                  startIcon={<AccountBalanceOutlinedIcon />}
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                >
                  List your programs
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <AppBar
        color="primary"
        position="static"
        enableColorOnDark
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Toolbar sx={{ overflowX: "clip" }}>
          <Container disableGutters>
            <Stack spacing={1} direction="row">
              {types.map((m) => (
                <Button
                  key={m}
                  sx={{
                    color: "white",
                    whiteSpace: "nowrap",
                    minWidth: "auto",
                  }}
                >
                  {m}
                </Button>
              ))}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
