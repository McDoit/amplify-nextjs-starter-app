"use client";
import {
  Container,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Button,
  Grid,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  AccordionActions,
  Link,
  Divider,
  Box,
  AppBar,
  Toolbar,
  ButtonGroup,
  IconButton,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BalanceIcon from "@mui/icons-material/Balance";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import { atom, useAtom, PrimitiveAtom } from "jotai";
import { splitAtom } from "jotai/utils";

import { useStore, Context, savedEducationsAtom, comparedEducationsAtom } from "../layout"

var infos = [
  {
    name: "Campus Location",
    icon: <PlaceOutlinedIcon />,
    value: "Online",
  },
  { name: "Languages", icon: <LanguageOutlinedIcon />, value: "English" },
  {
    name: "Study format",
    icon: <AutoStoriesOutlinedIcon />,
    value: "Distance learning",
  },
  {
    name: "Duration",
    icon: <HourglassEmptyOutlinedIcon />,
    value: "12 Months",
  },
  { name: "Pace", icon: <SpeedOutlinedIcon />, value: "Full time" },
  {
    name: "Tution fees",
    icon: <SellOutlinedIcon />,
    value: "Euro 1700/year",
  },
  {
    name: "Application deadline",
    icon: <AlarmOutlinedIcon />,
    value: "Request deadline",
  },
  {
    name: "Earliest start date",
    icon: <AccessTimeOutlinedIcon />,
    value: "October 12",
  },
];

var links = ["Introduction", "Admissions", "Gallery"];

const navigationAtom = atom(links[0]);

export default function EduPage() {
  const eduName = "IU";

  const [navigation, setNavigation] = useAtom(navigationAtom);

  //const contextValue: Context = useStore();

  const [savedEducations, setSavedEducations] = useAtom(savedEducationsAtom);
  const [comparedEducationsValue, setComparedEducations] =
    useAtom(comparedEducationsAtom);

  var eduSaved = savedEducations.some((m) => m === eduName);
  var eduCompared = comparedEducationsValue.some((m) => m === eduName);

  //const valueAtom = useMemo(() => atom({ value }), [value]);

  return (
    <Container>
      <Grid container spacing={2} my={2}>
        <Grid item sx={{ display: { xs: "none", md: "block" } }} xs={0} md={3}>
          <Paper>
            <Stack direction="column" spacing={2} p={2}>
              {links.map((m, i) => (
                <Link
                  key={i}
                  color="inherit"
                  variant="body1"
                  underline="none"
                  onClick={() => setNavigation(m)}
                  sx={{
                    opacity: navigation === m ? 1 : 0.5,
                    cursor: "pointer",
                  }}
                >
                  {m}
                </Link>
              ))}
            </Stack>
          </Paper>
          {/* </AppBar> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={2}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image="/temp-school-header.PNG"
                title="School Header Image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  IU International Univeristy of Applied Sciences
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  MSc in Advertising and Communications in the International
                  Sphere
                </Typography>
                <Divider variant="middle" />
                <Grid container spacing={2} pt={2}>
                  {infos.map((m, i) => (
                    <Grid key={i} item xs={6} sm={4} md={6} lg={4}>
                      <Stack spacing={0.5} direction="row">
                        <Box sx={{ opacity: 0.75 }}>{m.icon}</Box>
                        <Stack>
                          <Typography
                            sx={{ opacity: 0.75 }}
                            variant="subtitle2"
                          >
                            {m.name}
                          </Typography>
                          <Typography variant="subtitle2">{m.value}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
            <Paper>
              {links.map((m, i) => (
                <Accordion disableGutters key={i} expanded={navigation === m}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    onClick={() =>
                      navigation === m ? setNavigation("") : setNavigation(m)
                    }
                  >
                    <Typography>{m}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper>
            <Stack p={2} spacing={1}>
              <ButtonGroup fullWidth>
                {eduSaved && (
                  // <IconButton vocab="outlined">
                  //   <FavoriteIcon color="primary" />
                  // </IconButton>
                  <Button
                    fullWidth={false}
                    variant="outlined"
                    color="inherit"
                    //sx={{ bordercolor: "#f00" }}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSavedEducations((se) =>
                        se.filter((m) => m !== "IU")
                      );
                    }}
                  >
                    <FavoriteIcon color="primary" />
                  </Button>
                )}
                {eduSaved ? (
                  <Button variant="outlined" color="inherit">
                    View Saved
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="inherit"
                    //sx={{ bordercolor: "#f00" }}
                    startIcon={<FavoriteBorderIcon />}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSavedEducations([...savedEducations, "IU"]);
                    }}
                  >
                    Save
                  </Button>
                )}
              </ButtonGroup>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<BalanceIcon />}
                onClick={(event) => {
                  event.stopPropagation();

                  if (eduCompared) {
                    setComparedEducations(
                      comparedEducationsValue.filter((m) => m !== "IU")
                    );
                  } else {
                    setComparedEducations([...comparedEducationsValue, "IU"]);
                  }
                }}
              >
                Compare
              </Button>
              <Button color="primary" variant="contained">
                Contact school
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
