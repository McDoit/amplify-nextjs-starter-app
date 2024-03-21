//import "@mui/material";
declare global {
  declare module "@mui/material/Chip" {
    interface ChipPropsVariantOverrides {
      chosen: true;
      "emg-outlined": true;
    }
    export interface ChipPropsColorOverrides {
      contrast: true;
      emphasis: true;
      crazy: true;
      primaryShade50: true;
      primaryShade100: true;
      primaryShade200: true;
      primaryShade300: true;
      primaryShade400: true;
      primaryShade500: true;
      primaryShade600: true;
      primaryShade700: true;
      primaryShade800: true;
      primaryShade900: true;
      primaryShadeA100: true;
      primaryShadeA200: true;
      primaryShadeA400: true;
      primaryShadeA700: true;
      secondaryShade50: true;
      secondaryShade100: true;
      secondaryShade200: true;
      secondaryShade300: true;
      secondaryShade400: true;
      secondaryShade500: true;
      secondaryShade600: true;
      secondaryShade700: true;
      secondaryShade800: true;
      secondaryShade900: true;
      secondaryShadeA100: true;
      secondaryShadeA200: true;
      secondaryShadeA400: true;
      secondaryShadeA700: true;
    }
  }
}
