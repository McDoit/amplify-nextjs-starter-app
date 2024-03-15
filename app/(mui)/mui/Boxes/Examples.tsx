import {
  Avatar,
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
  Chip,
  AccordionActions,
  Link,
  Divider,
  Box,
  AppBar,
  Toolbar,
  ButtonGroup,
  IconButton,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  InputAdornment,
  Collapse,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { styled, Theme, useTheme } from "@mui/material/styles";

import { ChipPropsColorOverrides } from "@mui/material/Chip";
import { ButtonPropsColorOverrides } from "@mui/material/Button";

import { Helmet } from "react-helmet";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FaceIcon from "@mui/icons-material/Face";
import React from "react";
import { useMemo } from "react";

import { atom, useAtom } from "jotai";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: 4,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
  },
}));

const Color = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& div:first-of-type": {
    width: theme.spacing(5),
    height: theme.spacing(5),
    flexShrink: 0,
    marginRight: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
  },
}));

const colorItem = (
  theme: Theme,
  color: (x: Theme) => string,
  name: string,
  expanded = false,
  border = false
) => (
  <Color item xs={12} sm={6} md={expanded ? 8 : 4}>
    <Box
      sx={{
        backgroundColor: (theme) => color(theme), //color,
        border: (theme) =>
          border ? `1px solid ${theme.palette.divider}` : undefined,
      }}
    />
    <div>
      <Typography variant="body2">{name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {color(theme)}
      </Typography>
    </div>
  </Color>
);

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

const colorsInPalette = [
  "primary",
  "secondary",
  "emphasis",
  "contrast",
  "crazy",
  "error",
  "warning",
  "info",
  "success",
  "primaryShade50",
  "primaryShade100",
  "primaryShade200",
  "primaryShade300",
  "primaryShade400",
  "primaryShade500",
  "primaryShade600",
  "primaryShade700",
  "primaryShade800",
  "primaryShade900",
  "primaryShadeA100",
  "primaryShadeA200",
  "primaryShadeA400",
  "primaryShadeA700",
  "secondaryShade50",
  "secondaryShade100",
  "secondaryShade200",
  "secondaryShade300",
  "secondaryShade400",
  "secondaryShade500",
  "secondaryShade600",
  "secondaryShade700",
  "secondaryShade800",
  "secondaryShade900",
  "secondaryShadeA100",
  "secondaryShadeA200",
  "secondaryShadeA400",
  "secondaryShadeA700",
];

const chipsColorsInPalette = colorsInPalette.map(
  (color) =>
    color as (
      | "default"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
    ) &
      ChipPropsColorOverrides
);

const buttonColorsInPalette = colorsInPalette.map(
  (color) =>
    color as (
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning"
    ) &
      ButtonPropsColorOverrides
);

const examples = (theme: Theme) => {
  console.log("creating examples");
  return [
    {
      description: "Typography",
      content: (
        <Box sx={{ width: "100%", maxWidth: 500, m: 1 }}>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>
      ),
    },
    {
      description: "Primary Buttons",
      content: (
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </div>
        </Box>
      ),
    },
    {
      description: "Secondary Buttons",
      content: (
        <Box sx={{ "& button": { m: 1 } }}>
          <div>
            <Button size="small" color="secondary">
              Small
            </Button>
            <Button size="medium" color="secondary">
              Medium
            </Button>
            <Button size="large" color="secondary">
              Large
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="small" color="secondary">
              Small
            </Button>
            <Button variant="outlined" size="medium" color="secondary">
              Medium
            </Button>
            <Button variant="outlined" size="large" color="secondary">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small" color="secondary">
              Small
            </Button>
            <Button variant="contained" size="medium" color="secondary">
              Medium
            </Button>
            <Button variant="contained" size="large" color="secondary">
              Large
            </Button>
          </div>
        </Box>
      ),
    },
    {
      description: "Other Buttons",
      content: (
        <Box sx={{ "& button": { m: 1, my: 2 } }}>
          {buttonColorsInPalette.slice(2).map((color) => (
            <Box sx={{ paddingY: 1 }} key={color}>
              <Typography sx={{ padding: 1 }} variant="h6">
                {color}
              </Typography>
              <Divider />
              <div>
                <Button variant="text" size="large" color={color}>
                  Text
                </Button>
                <Button variant="outlined" size="large" color={color}>
                  Outlined
                </Button>
                <Button variant="contained" size="large" color={color}>
                  Contained
                </Button>
              </div>
            </Box>
          ))}
        </Box>
      ),
    },
    {
      description: "Chips",
      content: (
        <Box>
          {chipsColorsInPalette.map((color) => (
            <Box key={color} sx={{ padding: 1 }}>
              <Typography sx={{ padding: 1 }} variant="h6">
                {color}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Stack spacing={1}>
                  <Chip label="Filled" color={color} />
                  <Chip label="Outlined" variant="outlined" color={color} />
                </Stack>
                <Stack spacing={1}>
                  <Chip
                    label="Clickable"
                    color={color}
                    onClick={(event) => {}}
                  />
                  <Chip
                    label="Clickable"
                    variant="outlined"
                    color={color}
                    onClick={(event) => {}}
                  />
                </Stack>{" "}
                <Stack spacing={1}>
                  <Chip
                    label="Deletable"
                    color={color}
                    onDelete={(event) => {}}
                  />
                  <Chip
                    label="Deletable"
                    variant="outlined"
                    color={color}
                    onDelete={(event) => {}}
                  />
                </Stack>{" "}
                <Stack spacing={1}>
                  <Chip
                    label="Clickable Deletable"
                    color={color}
                    onClick={(event) => {}}
                    onDelete={(event) => {}}
                  />
                  <Chip
                    label="Clickable Deletable"
                    color={color}
                    variant="outlined"
                    onClick={(event) => {}}
                    onDelete={(event) => {}}
                  />
                </Stack>{" "}
                <Stack spacing={1}>
                  <Chip
                    color={color}
                    avatar={<Avatar>M</Avatar>}
                    label="Avatar"
                  />
                  <Chip
                    color={color}
                    avatar={
                      <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                    }
                    label="Avatar"
                    variant="outlined"
                  />
                </Stack>
                <Stack spacing={1}>
                  <Chip color={color} icon={<FaceIcon />} label="With Icon" />
                  <Chip
                    color={color}
                    icon={<FaceIcon />}
                    label="With Icon"
                    variant="outlined"
                  />
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
      ),
    },
    {
      description: "Grid",
      content: (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
      ),
    },
    {
      description: "Accordion",
      content: (
        <Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </Typography>
      ),
    },
    {
      description: "Date Picker",
      content: (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Container
            sx={{ width: "100%", maxWidth: 300, m: 1, paddingBottom: 2 }}
          >
            <DatePicker label="Basic date picker" />
          </Container>
        </LocalizationProvider>
      ),
    },
    {
      description: "Text Fields",
      content: (
        <Container
          sx={{ width: "100%", maxWidth: 300, m: 1, paddingBottom: 2 }}
        >
          <Stack spacing={3}>
            <TextField placeholder="With Placeholder"></TextField>
            <TextField
              helperText="With Helpertext"
              // FormHelperTextProps={CardActions}
            ></TextField>
            <TextField label="With Label"></TextField>
          </Stack>
        </Container>
      ),
    },
    {
      description: "Autocomplete",
      content: (
        <Container
          disableGutters
          sx={{ width: "100%", maxWidth: 500, m: 1, paddingBottom: 2 }}
        >
          <Stack spacing={3}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 400 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon />
                        <b>Where</b>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="do you want to study?"
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText={
                    <Stack direction="row">
                      <LocationOnOutlinedIcon />
                      <Typography>
                        <b>With</b> Helpertext
                      </Typography>
                    </Stack>
                  }
                />
              )}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    <Stack direction="row">
                      <LocationOnOutlinedIcon />
                      <Typography>
                        <b>With</b> Helpertext
                      </Typography>
                    </Stack>
                  }
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlinedIcon />
                        Where
                      </InputAdornment>
                    ),
                  }}
                  label="With Label"
                />
              )}
            />
          </Stack>
        </Container>
      ),
    },
    {
      description: "Special border",
      content: (
        <Container sx={{ paddingBottom: 2 }} disableGutters>
          <Paper
            sx={{
              backgroundColor: (theme) => theme.palette.emphasis.main,
              height: 40,
            }}
          ></Paper>
          <Paper sx={{ marginTop: -4, padding: 2 }}>
            CONTENT
            <br />
            CONTENT
            <br />
            CONTENT
            <br />
            CONTENT
            <br />
            CONTENT
            <br />
          </Paper>
        </Container>
      ),
    },
    {
      description: "Extra Colors",
      content: (
        <>
          <Typography gutterBottom sx={{ mb: 1.5 }}>
            Typography
          </Typography>
          <Grid container spacing={1}>
            {colorItem(
              theme,
              (theme) => theme.palette.text.primary,
              "palette.text.primary"
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.text.secondary,
              "palette.text.secondary"
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.text.disabled,
              "palette.text.disabled"
            )}
          </Grid>
          <Typography gutterBottom sx={{ mt: 4, mb: 1.5 }}>
            Buttons
          </Typography>
          <Grid container spacing={1}>
            {colorItem(
              theme,
              (theme) => theme.palette.action.active,
              "palette.action.active"
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.action.hover,
              "palette.action.hover"
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.action.selected,
              "palette.action.selected"
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.action.disabled,
              "palette.action.disabled"
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.action.disabledBackground,
              "palette.action.disabledBackground",
              true
            )}
          </Grid>
          <Typography gutterBottom sx={{ mt: 4, mb: 1.5 }}>
            Background
          </Typography>
          <Grid container spacing={1}>
            {colorItem(
              theme,
              (theme) => theme.palette.background.default,
              "palette.background.default",
              false,
              true
            )}
            {colorItem(
              theme,
              (theme) => theme.palette.background.paper,
              "palette.background.paper",
              false,
              true
            )}
          </Grid>
          <Typography gutterBottom sx={{ mt: 4, mb: 1.5 }}>
            Divider
          </Typography>
          <Grid container spacing={1}>
            {colorItem(
              theme,
              (theme) => theme.palette.divider,
              "palette.divider"
            )}
          </Grid>
        </>
      ),
    },
  ];
};

export default function Examples() {
  const theme = useTheme();

  //console.log(theme["palette"]);
  var generatedExamples = useMemo(() => examples(theme), [theme]);
  const stateArray = generatedExamples.map((m) => false);
  var [collapsedStates, setCollapsedStates] = React.useState<any>();

  console.log(collapsedStates);

  return (
    <Container sx={{ paddingY: 2 }}>
      <Helmet>
        <meta name="robots" content="index,follow" />
      </Helmet>
      {generatedExamples.map((m, i) => (
        <Paper key={i} sx={{ padding: 2, margin: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" padding={2}>
              {m.description}
            </Typography>

            <Button
              onClick={() =>
                setCollapsedStates((prev: any) => {
                  prev[i] = !prev[i];
                  return { ...prev };
                })
              }
            >
              {collapsedStates[i] ? "Show less" : "Show more"}
            </Button>
          </Stack>
          <Divider sx={{ marginBottom: 2 }} />
          <Collapse component="div" in={collapsedStates[i]} collapsedSize={200}>
            {m.content}
          </Collapse>
          {!collapsedStates[i] && (
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  ["::after"]: {
                    content: '""',
                    position: "absolute",
                    //right: 0,
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100px",
                    background: (theme) =>
                      `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
                  },
                }}
              ></Box>
            </Box>
          )}
        </Paper>
      ))}
    </Container>
  );
}
