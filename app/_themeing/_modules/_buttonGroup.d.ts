//import "@mui/material";
declare global {
  declare module "@mui/material/ButtonGroup" {
    interface ButtonGroupPropsVariantOverrides {
      contrast: true;
      chosen: true;
      "emg-outlined": true;
    }
  }
}
