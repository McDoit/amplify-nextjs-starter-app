import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import svLocale from "date-fns/locale/sv";
//import { sv } from "date-fns/locale";

export interface BasicDateRangePickerProps {
  from?: Date;
  to?: Date;
  onChange?: (value: DateRange<Date | undefined>) => void;
}

const CustomFieldSeparator = () => (
  <Box
    display="flex"
    sx={{
      alignSelf: "center",
      mx: 2,
    }}
  >
    <ArrowForwardIcon fontSize="large" />
  </Box>
);

export default function BasicDateRangePicker(props: BasicDateRangePickerProps) {
  const [value, setValue] = React.useState<DateRange<Date | undefined>>([
    props.from,
    props.to,
  ]);

  React.useEffect(() => {
    //console.log("DateRange");
    //console.log([props.from, props.to]);
    setValue([props.from, props.to]);
  }, [props.from, props.to]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        localeText={{ start: "Tidigast", end: "Senast" }}
        slots={{
          fieldSeparator: CustomFieldSeparator,
        }}
        // startText="Tidigast"
        // endText="Senast"
        value={value}
        onChange={(newValue, context) => {
          setValue(newValue);
          console.log("context", context);
          console.log(newValue);
          if (props.onChange) {
            console.log("inner", newValue);
            props.onChange(newValue);
          }
        }}
        // renderInput={(startProps, endProps) => (
        //   <React.Fragment>
        //     <TextField
        //       label="Tidigast"
        //       placeholder={"Välj datum"}
        //       {...startProps}
        //     />
        //     <Box
        //       display="flex"
        //       sx={{
        //         alignSelf: "center",
        //         mx: 2,
        //       }}
        //     >
        //       <ArrowForwardIcon fontSize="large" />
        //     </Box>
        //     <TextField
        //       placeholder="Välj datum"
        //       label="Senast"
        //       // InputLabelProps={{
        //       //   shrink: true
        //       // }}
        //       {...endProps}
        //     />
        //   </React.Fragment>
        // )}
      />
    </LocalizationProvider>
  );
}
