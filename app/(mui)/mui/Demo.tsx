// "use client";
// import * as React from "react";
// import {
//   ThemeProvider,
//   createTheme,
//   ThemeOptions,
//   responsiveFontSizes,
//   lighten,
// } from "@mui/material/styles";

// //import { ChipPropsVariantOverrides } from "@mui/material/Chip";
// //import { BadgePropsColorOverrides } from "@mui/material/Badge";

// import {
//   PaletteMode,
//   Dialog,
//   DialogTitle,
//   IconButton,
//   DialogContent,
//   Typography,
//   Switch,
//   Stack,
//   Paper,
//   Select,
//   MenuItem,
//   colors,
//   Button,
//   useMediaQuery,
//   SelectChangeEvent,
//   SimplePaletteColorOptions
// } from "@mui/material";


// //const colorObjects = colors;
// //const colorObjects = Object.keys(colors).map((k) => colors[k as any]);


// import CloseIcon from "@mui/icons-material/Close";

// import { atom, useAtom } from "jotai";

// import Site from "./Site";
// import { atomWithLocalStorage } from "./atomWithLocalStorage";
// import { useMemo } from "react";

// declare module "@mui/material/styles" {
//   interface Palette {
//     emphasis: PaletteColor;
//     contrast: PaletteColor;
//     crazy: PaletteColor;
//     primaryShade50: PaletteColor;
//     primaryShade100: PaletteColor;
//     primaryShade200: PaletteColor;
//     primaryShade300: PaletteColor;
//     primaryShade400: PaletteColor;
//     primaryShade500: PaletteColor;
//     primaryShade600: PaletteColor;
//     primaryShade700: PaletteColor;
//     primaryShade800: PaletteColor;
//     primaryShade900: PaletteColor;
//     primaryShadeA100: PaletteColor;
//     primaryShadeA200: PaletteColor;
//     primaryShadeA400: PaletteColor;
//     primaryShadeA700: PaletteColor;
//     secondaryShade50: PaletteColor;
//     secondaryShade100: PaletteColor;
//     secondaryShade200: PaletteColor;
//     secondaryShade300: PaletteColor;
//     secondaryShade400: PaletteColor;
//     secondaryShade500: PaletteColor;
//     secondaryShade600: PaletteColor;
//     secondaryShade700: PaletteColor;
//     secondaryShade800: PaletteColor;
//     secondaryShade900: PaletteColor;
//     secondaryShadeA100: PaletteColor;
//     secondaryShadeA200: PaletteColor;
//     secondaryShadeA400: PaletteColor;
//     secondaryShadeA700: PaletteColor;
//   }

//   interface PaletteOptions {
//     emphasis?: PaletteColorOptions;
//     contrast?: PaletteColorOptions;
//     crazy?: PaletteColorOptions;
//     primaryShade50?: PaletteColorOptions;
//     primaryShade100?: PaletteColorOptions;
//     primaryShade200?: PaletteColorOptions;
//     primaryShade300?: PaletteColorOptions;
//     primaryShade400?: PaletteColorOptions;
//     primaryShade500?: PaletteColorOptions;
//     primaryShade600?: PaletteColorOptions;
//     primaryShade700?: PaletteColorOptions;
//     primaryShade800?: PaletteColorOptions;
//     primaryShade900?: PaletteColorOptions;
//     primaryShadeA100?: PaletteColorOptions;
//     primaryShadeA200?: PaletteColorOptions;
//     primaryShadeA400?: PaletteColorOptions;
//     primaryShadeA700?: PaletteColorOptions;
//     secondaryShade50?: PaletteColorOptions;
//     secondaryShade100?: PaletteColorOptions;
//     secondaryShade200?: PaletteColorOptions;
//     secondaryShade300?: PaletteColorOptions;
//     secondaryShade400?: PaletteColorOptions;
//     secondaryShade500?: PaletteColorOptions;
//     secondaryShade600?: PaletteColorOptions;
//     secondaryShade700?: PaletteColorOptions;
//     secondaryShade800?: PaletteColorOptions;
//     secondaryShade900?: PaletteColorOptions;
//     secondaryShadeA100?: PaletteColorOptions;
//     secondaryShadeA200?: PaletteColorOptions;
//     secondaryShadeA400?: PaletteColorOptions;
//     secondaryShadeA700?: PaletteColorOptions;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsVariantOverrides {
//     contrast: true;
//     chosen: true;
//     "emg-outlined": true;
//   }
// }


// declare module "@mui/material/ButtonGroup" {
//   interface ButtonGroupPropsVariantOverrides {
//     contrast: true;
//     chosen: true;
//     "emg-outlined": true;
//   }
// }



// declare module "@mui/material/Badge" {
//   interface BadgePropsColorOverrides {
//     contrast: true;
//     emphasis: true;
//     crazy: true;
//     primaryShade50: true;
//     primaryShade100: true;
//     primaryShade200: true;
//     primaryShade300: true;
//     primaryShade400: true;
//     primaryShade500: true;
//     primaryShade600: true;
//     primaryShade700: true;
//     primaryShade800: true;
//     primaryShade900: true;
//     primaryShadeA100: true;
//     primaryShadeA200: true;
//     primaryShadeA400: true;
//     primaryShadeA700: true;
//     secondaryShade50: true;
//     secondaryShade100: true;
//     secondaryShade200: true;
//     secondaryShade300: true;
//     secondaryShade400: true;
//     secondaryShade500: true;
//     secondaryShade600: true;
//     secondaryShade700: true;
//     secondaryShade800: true;
//     secondaryShade900: true;
//     secondaryShadeA100: true;
//     secondaryShadeA200: true;
//     secondaryShadeA400: true;
//     secondaryShadeA700: true;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     contrast: true;
//     emphasis: true;
//     crazy: true;
//     primaryShade50: true;
//     primaryShade100: true;
//     primaryShade200: true;
//     primaryShade300: true;
//     primaryShade400: true;
//     primaryShade500: true;
//     primaryShade600: true;
//     primaryShade700: true;
//     primaryShade800: true;
//     primaryShade900: true;
//     primaryShadeA100: true;
//     primaryShadeA200: true;
//     primaryShadeA400: true;
//     primaryShadeA700: true;
//     secondaryShade50: true;
//     secondaryShade100: true;
//     secondaryShade200: true;
//     secondaryShade300: true;
//     secondaryShade400: true;
//     secondaryShade500: true;
//     secondaryShade600: true;
//     secondaryShade700: true;
//     secondaryShade800: true;
//     secondaryShade900: true;
//     secondaryShadeA100: true;
//     secondaryShadeA200: true;
//     secondaryShadeA400: true;
//     secondaryShadeA700: true;
//   }
// }

// declare module "@mui/material/Chip" {
//   interface ChipPropsVariantOverrides {
//     chosen: true;
//     "emg-outlined": true;
//   }
//   export interface ChipPropsColorOverrides {
//     contrast: true;
//     emphasis: true;
//     crazy: true;
//     primaryShade50: true;
//     primaryShade100: true;
//     primaryShade200: true;
//     primaryShade300: true;
//     primaryShade400: true;
//     primaryShade500: true;
//     primaryShade600: true;
//     primaryShade700: true;
//     primaryShade800: true;
//     primaryShade900: true;
//     primaryShadeA100: true;
//     primaryShadeA200: true;
//     primaryShadeA400: true;
//     primaryShadeA700: true;
//     secondaryShade50: true;
//     secondaryShade100: true;
//     secondaryShade200: true;
//     secondaryShade300: true;
//     secondaryShade400: true;
//     secondaryShade500: true;
//     secondaryShade600: true;
//     secondaryShade700: true;
//     secondaryShade800: true;
//     secondaryShade900: true;
//     secondaryShadeA100: true;
//     secondaryShadeA200: true;
//     secondaryShadeA400: true;
//     secondaryShadeA700: true;
//   }
// }

// const initalColorMode: PaletteMode = "light";

// // const useColorModeAtom = atomWithLocalStorage<PaletteMode>(
// //   "useColorModeAtom",
// //   initalColorMode
// // );
// const useThemeOptionsAtom = atomWithLocalStorage("useThemeOptionsAtom", "kas");

// // const primaryShadesAtom = atomWithLocalStorage("primaryShadesAtom", "red");
// // const secondaryShadesAtom = atomWithLocalStorage(
// //   "secondaryShadesAtom",
// //   "blueGrey"
// // );

// interface ThemeCustomizationInterface {
//   colorMode: PaletteMode;
//   primaryColors: string;
//   secondaryColors: string;
//   primaryMain: string;
//   secondaryMain: string;
//   primaryShade: string;
//   secondaryShade: string;
// }

// const initialThemeCustomization: ThemeCustomizationInterface = {
//   colorMode: "light",
//   primaryColors: "red",
//   secondaryColors: "blueGrey",
//   primaryMain: "#F67C79",
//   secondaryMain: "#434F66",
//   primaryShade: "500",
//   secondaryShade: "500",
// };

// const initializeThemeCustomization = (
//   prefersDarkMode: boolean
// ): ThemeCustomizationInterface => {
//   console.log("creating default theme");
//   return {
//     colorMode: prefersDarkMode ? "dark" : "light",
//     primaryColors: "red",
//     secondaryColors: "blueGrey",
//     primaryMain: "#F67C79",
//     secondaryMain: "#434F66",
//     primaryShade: "500",
//     secondaryShade: "500",
//   };
// };

// // const themeCustomizationAtom = atomWithLocalStorage(
// //   "themeCustomizationAtom",
// //   initialThemeCustomization2
// // );

// // var c = colors["red"][500];

// // const convertArrayToObject = (array, key) => {
// //   const initialValue = {};
// //   return array.reduce((obj, item) => {
// //     console.log(item);
// //     return {
// //       ...obj,
// //       [item.key]: item.value,
// //     };
// //   }, initialValue);
// // };

// // var pcObject = Object.keys(primaryColor).map((m) => {
// //   //console.log("primaryShade" + m + ": { main: primaryColor[" + m + "] },");
// //   console.log(
// //     "primaryShade" +
// //       m +
// //       ": theme.palette.augmentColor({color: { main: primaryColor[" +
// //       m +
// //       "] }, name: 'primaryShade" +
// //       m +
// //       "'}),"
// //   );
// //   return {
// //     key: "primaryShade" + m,
// //     value: { main: primaryColor[m] },
// //   };
// // });
// // var scObject = Object.keys(secondaryColor).map((m) => {
// //   //console.log("secondaryShade" + m);
// //   //console.log("secondaryShade" + m + ": { main: secondaryColor[" + m + "] },");
// //   console.log(
// //     "secondaryShade" +
// //       m +
// //       ": theme.palette.augmentColor({color: { main: secondaryColor[" +
// //       m +
// //       "] }, name: 'secondaryShade" +
// //       m +
// //       "'}),"
// //   );
// //   return {
// //     key: "secondaryShade" + m,
// //     value: { main: secondaryColor[m] },
// //   };
// // });

// // console.log(pcObject);

// // var newPcObj = convertArrayToObject(pcObject.concat(scObject), "key");

// // console.log(newPcObj);

// const baseThemeOptions: ThemeOptions = {
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         colorInherit: {
//           backgroundColor: "#434F66",
//           color: "#fff",
//         },
//       },
//       defaultProps: {
//         color: "inherit",
//       },
//     },
//     MuiToolbar: {
//       defaultProps: {
//         variant: "dense",
//       },
//       styleOverrides: {
//         // colorInherit: {
//         //   backgroundColor: "#434F66",
//         //   color: "#fff",
//         // },
//         // defaultProps: {
//         //   color: "inherit",
//         // },
//         dense: {
//           // height: 52,
//           //backgroundColor: "#434F66",
//           minHeight: 52,
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         deleteIconColorPrimary: {
//           color: "#ffffff",
//         },
//         deleteIconColorSecondary: {
//           color: "secondary",
//         },
//         deleteIcon: {
//           "&&:hover": {
//             //color: 'purple',
//           },
//         },
//         // root: {
//         //   margin: "4px 8px 4px 0px",
//         //   borderRadius: "0.25rem",
//         // },
//       },
//       variants: [
//         {
//           props: { variant: "chosen" },
//           style: {
//             outline: `2px solid black`,
//             backgroundColor: "white",
//           },
//         },
//       ],
//     },
//     MuiButton: {
//       variants: [
//         // {
//         //   props: { variant: "outlined", color: "inherit" },
//         //   style: ({ theme }) => ({
//         //     borderColor: lighten(
//         //       theme.palette.text.primary,
//         //       1 - theme.palette.tonalOffset
//         //     ),
//         //     borderStyle: "solid",
//         //     borderWidth: "1px",
//         //   }),
//         // },
//         {
//           props: { variant: "contrast" },
//           style: {
//             borderColor: "white",
//             borderStyle: "solid",
//             borderWidth: "1px",
//             color: "white",
//           },
//         },
//         {
//           props: { variant: "outlined", color: "contrast" },
//           style: {
//             root: {
//               borderColor: "contrast",
//               borderStyle: "solid",
//               borderWidth: "1px",
//               color: "contrast",
//             },
//             borderColor: "contrast",
//             borderStyle: "solid",
//             borderWidth: "1px",
//             color: "contrast",
//           },
//         },
//         {
//           props: { variant: "chosen" },
//           style: {
//             color: "black",
//             outline: `2px solid black`,
//             backgroundColor: "white",
//           },
//         },
//         {
//           props: { variant: "emg-outlined" },
//           style: {
//             color: "grey",
//             outline: `1px solid grey`,
//             backgroundColor: "white",
//           },
//         },
//       ],
//     },
//   },
//   typography: {
//     fontFamily: "Open Sans",
//     h1: {
//       fontFamily: "Raleway",
//       fontWeight: 800,
//       lineHeight: 1.2,
//       letterSpacing: 0,
//       fontSize: "3rem",
//     },
//     h2: {
//       fontFamily: "Raleway",
//       fontWeight: 800,
//       lineHeight: 1.3,
//       letterSpacing: 0,
//       fontSize: "2.5rem",
//     },
//     h3: {
//       fontFamily: "Raleway",
//       fontWeight: 800,
//       lineHeight: 1.3,
//       letterSpacing: 0,
//       fontSize: "2rem",
//     },
//     h4: {
//       fontFamily: "Raleway",
//       fontWeight: 800,
//       lineHeight: 1.3,
//       letterSpacing: 0.005,
//       fontSize: "1.5rem",
//     },
//     h5: {
//       fontFamily: "Raleway",
//       fontWeight: 700,
//       lineHeight: 1.3,
//       letterSpacing: 0.005,
//       fontSize: "1.38rem",
//     },
//     h6: {
//       fontFamily: "Raleway",
//       fontWeight: 700,
//       lineHeight: 1.3,
//       letterSpacing: 0.005,
//       fontSize: "1.125rem",
//     },
//     subtitle1: {
//       fontFamily: "Raleway",
//       fontWeight: 700,
//       lineHeight: 1.4,
//       letterSpacing: 0.005,
//       fontSize: "1rem",
//     },
//     button: {
//       textTransform: "none",
//     },
//   },
//   shape: {
//     borderRadius: 12,
//   },
// };

// const studentumThemeOptions: ThemeOptions = {
//   palette: {
//     primary: {
//       main: "#00897B",
//       light: "#80cbc4",
//     },
//     secondary: {
//       main: "#d81b60",
//       light: "#f48fb1",
//     },
//     emphasis: {
//       main: "#00897B",
//       contrastText: "#ffffff",
//     },
//     contrast: {
//       main: "#ffffff",
//     },
//     background: {
//       default: "#434f66",
//     },
//   },
// };

// var kasThemeOptions: ThemeOptions = {
//   palette: {
//     primary: {
//       main: "#F67C79",
//       // light: "#FFB5B5",
//       // dark: "#CA4341",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       main: "#434F66",
//       // dark: "#717171",
//       // light: "#E0E0E0",
//     },
//     emphasis: {
//       main: "#ca4341",
//       contrastText: "#ffffff",
//     },
//     contrast: {
//       main: "#ffffff",
//       contrastText: "#ffffff",
//     },
//     background: {
//       default: "#434f66",
//     },
//   },
// };

// const eduThemeOptions = studentumThemeOptions; ///TODO

// //console.log(theme);

// export default function GlobalThemeOverride() {
//   //var [colorMode, setColorMode] = useAtom(useColorModeAtom);
//   const [chosenTheme, setChosenTheme] = useAtom(useThemeOptionsAtom); ///React.useState("kas");
//   // const [primaryColorName, setPrimaryColorName] = useAtom(primaryShadesAtom);
//   // const [secondaryColorName, setSecondaryColorName] =
//   //   useAtom(secondaryShadesAtom);

//   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

//   var itc = useMemo(() => {
//     console.log(prefersDarkMode, "prefersDarkMode");
//     return initializeThemeCustomization(prefersDarkMode);
//   }, [prefersDarkMode]);

//   const themeCustomizationAtom = useMemo(
//     () =>
//       atomWithLocalStorage(
//         "themeCustomizationAtom",
//         //initializeThemeCustomization(prefersDarkMode)
//         //initialThemeCustomization
//         itc
//       ),
//     [itc]
//   );

//   const [themeCustomization, setThemeCustomization] = useAtom(
//     themeCustomizationAtom
//   );

//   // if (!themeCustomization) {
//   //   var itc = initializeThemeCustomization(prefersDarkMode);
//   //   setThemeCustomization(itc);
//   // }

//   // const theme = responsiveFontSizes(createTheme(mergedThemeOptions), {
//   //   breakpoints: ["sm"],
//   //   factor: 1.1,
//   // });

//   const theme = React.useMemo(() => {
//     console.log("Creating theme in memo");
//     // @ts-expect-error
//     var primaryColor = colors[themeCustomization.primaryColors];
//     // @ts-expect-error
//     var secondaryColor = colors[themeCustomization.secondaryColors];

//     var chosenThemeOption =
//       chosenTheme === "kas" ? kasThemeOptions : eduThemeOptions;

//       if(chosenThemeOption.palette?.primary) {
//         chosenThemeOption.palette.primary = { main: themeCustomization.primaryMain } as SimplePaletteColorOptions;
//       }
//       if(chosenThemeOption?.palette?.secondary) {
//         //var sm: SimplePaletteColorOptions = { main: themeCustomization.secondaryMain };
//         chosenThemeOption.palette.secondary = { main: themeCustomization.secondaryMain } as SimplePaletteColorOptions;
//       }
//     // chosenThemeOption.palette.emphasis.main =
//     //   colors[themeCustomization.primaryColors][200];

//     const mergedThemeOptions: ThemeOptions = {
//       ...baseThemeOptions,
//       ...chosenThemeOption,
//     };

//     var mergedThemeOptionsColorMode: ThemeOptions = {
//       ...mergedThemeOptions,
//       palette: {
//         ...mergedThemeOptions.palette,
//         mode: themeCustomization.colorMode,
//       },
//     };

//     var theme = createTheme(mergedThemeOptionsColorMode);

//     theme = createTheme(theme, {
//       palette: {
//         crazy: {
//           main: "#0f0",
//           dark: "#f00",
//           light: "#00f",
//           contrastText: "#999",
//         },
//         emphasis: theme.palette.augmentColor({
//           // @ts-expect-error
//           color: { main: colors[themeCustomization.primaryColors][800] },
//           name: "emphasis",
//         }),
//         primaryShade50: theme.palette.augmentColor({
//           color: { main: primaryColor[50] },
//           name: "primaryShade50",
//         }),
//         primaryShade100: theme.palette.augmentColor({
//           color: { main: primaryColor[100] },
//           name: "primaryShade100",
//         }),
//         primaryShade200: theme.palette.augmentColor({
//           color: { main: primaryColor[200] },
//           name: "primaryShade200",
//         }),
//         primaryShade300: theme.palette.augmentColor({
//           color: { main: primaryColor[300] },
//           name: "primaryShade300",
//         }),
//         primaryShade400: theme.palette.augmentColor({
//           color: { main: primaryColor[400] },
//           name: "primaryShade400",
//         }),
//         primaryShade500: theme.palette.augmentColor({
//           color: { main: primaryColor[500] },
//           name: "primaryShade500",
//         }),
//         primaryShade600: theme.palette.augmentColor({
//           color: { main: primaryColor[600] },
//           name: "primaryShade600",
//         }),
//         primaryShade700: theme.palette.augmentColor({
//           color: { main: primaryColor[700] },
//           name: "primaryShade700",
//         }),
//         primaryShade800: theme.palette.augmentColor({
//           color: { main: primaryColor[800] },
//           name: "primaryShade800",
//         }),
//         primaryShade900: theme.palette.augmentColor({
//           color: { main: primaryColor[900] },
//           name: "primaryShade900",
//         }),
//         primaryShadeA100: theme.palette.augmentColor({
//           color: { main: primaryColor["A100"] },
//           name: "primaryShadeA100",
//         }),
//         primaryShadeA200: theme.palette.augmentColor({
//           color: { main: primaryColor["A200"] },
//           name: "primaryShadeA200",
//         }),
//         primaryShadeA400: theme.palette.augmentColor({
//           color: { main: primaryColor["A400"] },
//           name: "primaryShadeA400",
//         }),
//         primaryShadeA700: theme.palette.augmentColor({
//           color: { main: primaryColor["A700"] },
//           name: "primaryShadeA700",
//         }),
//         secondaryShade50: theme.palette.augmentColor({
//           color: { main: secondaryColor[50] },
//           name: "secondaryShade50",
//         }),
//         secondaryShade100: theme.palette.augmentColor({
//           color: { main: secondaryColor[100] },
//           name: "secondaryShade100",
//         }),
//         secondaryShade200: theme.palette.augmentColor({
//           color: { main: secondaryColor[200] },
//           name: "secondaryShade200",
//         }),
//         secondaryShade300: theme.palette.augmentColor({
//           color: { main: secondaryColor[300] },
//           name: "secondaryShade300",
//         }),
//         secondaryShade400: theme.palette.augmentColor({
//           color: { main: secondaryColor[400] },
//           name: "secondaryShade400",
//         }),
//         secondaryShade500: theme.palette.augmentColor({
//           color: { main: secondaryColor[500] },
//           name: "secondaryShade500",
//         }),
//         secondaryShade600: theme.palette.augmentColor({
//           color: { main: secondaryColor[600] },
//           name: "secondaryShade600",
//         }),
//         secondaryShade700: theme.palette.augmentColor({
//           color: { main: secondaryColor[700] },
//           name: "secondaryShade700",
//         }),
//         secondaryShade800: theme.palette.augmentColor({
//           color: { main: secondaryColor[800] },
//           name: "secondaryShade800",
//         }),
//         secondaryShade900: theme.palette.augmentColor({
//           color: { main: secondaryColor[900] },
//           name: "secondaryShade900",
//         }),
//         secondaryShadeA100: theme.palette.augmentColor({
//           color: { main: secondaryColor["A100"] },
//           name: "secondaryShadeA100",
//         }),
//         secondaryShadeA200: theme.palette.augmentColor({
//           color: { main: secondaryColor["A200"] },
//           name: "secondaryShadeA200",
//         }),
//         secondaryShadeA400: theme.palette.augmentColor({
//           color: { main: secondaryColor["A400"] },
//           name: "secondaryShadeA400",
//         }),
//         secondaryShadeA700: theme.palette.augmentColor({
//           color: { main: secondaryColor["A700"] },
//           name: "secondaryShadeA700",
//         }),
//       },
//     });

//     return theme;
//   }, [chosenTheme, themeCustomization]);

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // setColorMode(event.target.checked ? "light" : "dark");

//     setThemeCustomization((prev) => ({
//       ...prev,
//       colorMode: event.target.checked ? "light" : "dark",
//     }));
//   };

//   const handleThemeChange = (event: SelectChangeEvent) => {
//     setChosenTheme(event.target.value as string);
//   };

//   const handlePrimaryColorsChange = (event: SelectChangeEvent) => {
//     themeCustomization.primaryColors = event.target.value as string;

//     if (themeCustomization.primaryShade) {
//       themeCustomization.primaryMain =
//       // @ts-expect-error
//         colors[themeCustomization.primaryColors][
//           themeCustomization.primaryShade
//         ];
//     }

//     setThemeCustomization((prev) => ({
//       ...prev,
//       primaryColors: event.target.value as string,
//       primaryMain: themeCustomization.primaryMain,
//     }));
//   };

//   const handleSecondaryColorsChange = (event: SelectChangeEvent) => {
//     themeCustomization.secondaryColors = event.target.value as string;

//     if (themeCustomization.secondaryShade) {
      
//       themeCustomization.secondaryMain =
//       // @ts-expect-error
//       colors[themeCustomization.secondaryColors][
//           themeCustomization.secondaryShade
//         ];
//     }

//     setThemeCustomization((prev) => ({
//       ...prev,
//       secondaryColors: event.target.value as string,
//       secondaryMain: themeCustomization.secondaryMain,
//     }));
//   };
//   const handlePrimaryShadeChange = (event: SelectChangeEvent) => {
//     themeCustomization.primaryShade = event.target.value;

//     if (themeCustomization.primaryShade) {
//       themeCustomization.primaryMain =
//       // @ts-expect-error
//         colors[themeCustomization.primaryColors][
//           themeCustomization.primaryShade
//         ];
//     }

//     setThemeCustomization((prev) => ({
//       ...prev,
//       primaryShade: themeCustomization.primaryShade,
//       primaryMain: themeCustomization.primaryMain,
//     }));
//   };

//   const handleSecondaryShadeChange = (event: SelectChangeEvent) => {
//     themeCustomization.secondaryShade = event.target.value;

//     if (themeCustomization.secondaryShade) {
      
//       themeCustomization.secondaryMain =
//       // @ts-expect-error
//         colors[themeCustomization.secondaryColors][
//           themeCustomization.secondaryShade
//         ];
//     }

//     setThemeCustomization((prev) => ({
//       ...prev,
//       secondaryShade: themeCustomization.secondaryShade,
//       secondaryMain: themeCustomization.secondaryMain,
//     }));
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Site openThemeDialog={handleClickOpen} />
//       <Dialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Theme Options
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <Paper sx={{ padding: 2, marginY: 1 }}>
//             <Typography gutterBottom component="div">
//               <Stack direction="row" alignContent="center" alignItems="center">
//                 <>Dark</>
//                 <Switch
//                   checked={themeCustomization.colorMode !== "dark"}
//                   onChange={handleModeChange}
//                 />
//                 <>Light</>
//               </Stack>
//             </Typography>
//           </Paper>
//           <Paper sx={{ padding: 2, marginY: 1 }}>
//             {/* <Typography gutterBottom> */}
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={chosenTheme}
//               label="Theme"
//               onChange={handleThemeChange}
//             >
//               <MenuItem value="kas">KAS</MenuItem>
//               <MenuItem value="edu">EDU</MenuItem>
//             </Select>
//             {/* </Typography> */}
//           </Paper>
//           <Paper sx={{ padding: 2, marginY: 1 }}>
//             {/* <Typography gutterBottom> */}
//             <Stack spacing={2}>
//               <Stack spacing={2} direction="row">
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={themeCustomization.primaryColors}
//                   onChange={handlePrimaryColorsChange}
//                 >
//                   {Object.keys(colors).map((color) => (
//                     <MenuItem key={color} value={color}>
//                       {color}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 <Select
//                   value={themeCustomization.primaryShade}
//                   onChange={handlePrimaryShadeChange}
//                   //color="secondary"
//                 >
//                   <MenuItem value="">
//                     <em>Shade</em>
//                   </MenuItem>
                  
//                   {// @ts-expect-error
//                   Object.keys(colors[themeCustomization.primaryColors]).map(
//                     (color) => (
//                       <MenuItem key={color} value={color}>
//                         {color}
//                       </MenuItem>
//                     )
//                   )}
//                 </Select>
//               </Stack>
//               <Stack spacing={2} direction="row">
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={themeCustomization.secondaryColors}
//                   onChange={handleSecondaryColorsChange}
//                   color="secondary"
//                 >
//                   {Object.keys(colors).map((color) => (
//                     <MenuItem key={color} value={color}>
//                       {color}
//                     </MenuItem>
//                   ))}
//                 </Select>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={themeCustomization.secondaryShade}
//                   onChange={handleSecondaryShadeChange}
//                   color="secondary"
//                 >
//                   <MenuItem value="">
//                     <em>Shade</em>
//                   </MenuItem>
//                   {// @ts-expect-error
//                   Object.keys(colors[themeCustomization.secondaryColors]).map(
//                     (color) => (
//                       <MenuItem key={color} value={color}>
//                         {color}
//                       </MenuItem>
//                     )
//                   )}
//                 </Select>
//               </Stack>
//             </Stack>
//             {/* </Typography> */}
//           </Paper>
//           <Paper sx={{ padding: 2, marginY: 1 }}>
//             <Typography gutterBottom variant="button">
//               Visual represenation of current theme customization object
//             </Typography>
//             <Typography gutterBottom variant="caption">
//               <pre>{JSON.stringify(themeCustomization, null, 2)}</pre>
//             </Typography>
//             <Button
//               onClick={() =>
//                 setThemeCustomization(
//                   initializeThemeCustomization(prefersDarkMode)
//                   //undefined
//                 )
//               }
//             >
//               Reset
//             </Button>
//           </Paper>
//         </DialogContent>
//       </Dialog>
//     </ThemeProvider>
//   );
// }
