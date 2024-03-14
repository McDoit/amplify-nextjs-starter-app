import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
// import { EmgSlider } from "./EmgSlider";
import { Box, Slider } from "@mui/material";

export interface EsrangeProps {
  ariaLabel?: string;
  from?: number;
  fromLabel?: string;
  max: number;
  min: number;
  to?: number;
  toLabel?: string;
  step?: number;
  valueSuffix?: string;
  onChange?: (values: number[]) => void;
}

export function Esrange(props: EsrangeProps) {
  const min: number = props.min;
  const max: number = props.max;

  // const convertNumber = (
  //   val?: number | undefined | string
  // ): number | undefined => {
  //   //console.log('convertNumber: ' + val);

  //   if (val as string) {
  //     return parseInt(val as string);
  //   }

  //   return val as number | undefined;
  // };

  var lowValueInit = props.from ?? min;
  var highValueInit = props.to ?? max;

  //console.log([lowValueInit, highValueInit]);

  //const [lowValue, setLowValue] = React.useState<number>(lowValueInit);
  //const [highValue, setHighValue] = React.useState<number>(highValueInit);

  const [values, setValues] = React.useState<number[]>([
    lowValueInit,
    highValueInit,
  ]);

  // const handleChange = (low: number, high: number) => {
  //   //setLowValue(low);
  //   //setHighValue(high);

  //   if (props.onChange) {
  //     //props.onChange({ from: low, to: high });
  //   }
  // };

  const handleSliderValueChange = (value: number | number[]) => {
    //console.log(value);
    const values = value as number[];
    if (values) {
      setValues(values);
      // TODO build fix, check how to
      if (props.onChange) {
        props.onChange(values);
      }
    }
  };

  const handleSliderChangeCommited = (event: any, value: number | number[]) => {
    //console.log({ event, value, activeThumb });
    if (value || event) {
      //event.stopPropagation();
      handleSliderValueChange(value);
    }
  };

  const handleSliderChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    //console.log({ event, value, activeThumb });
    if (value || event || activeThumb) {
      //event.stopPropagation();
      const values = value as number[];
      if (values) {
        setValues(values);
      }
      //handleSliderValueChange(value);
    }
  };

  const handleLowChange = (event: any) => {
    const i = parseInt(event.target.value, 10);

    if (i >= min && i <= max && i < values[1]) {
      setValues([i, values[1]]);
    }
  };

  const handleHighChange = (event: any) => {
    const i = parseInt(event.target.value, 10);

    if (i >= min && i <= max && i > values[0]) {
      setValues([values[0], i]);
    }
  };

  // TODO test if working
  const valueText = (value: number, index: number) => {
    return `Index at ${index} with value of ${value}${props.valueSuffix}`;
  };

  // React.useEffect(() => {
  //   // console.log('Start Effecting');
  //   // console.log(props);
  //   // console.log([props.from, props.to]);
  //   // var fromDate = from == null ? null : parse(from, 'yyyy-MM-dd', new Date());
  //   // var toDate = to == null ? null : parse(to, 'yyyy-MM-dd', new Date());
  //   // if(!muiValue[0]) {
  //   //   if(fromDate && toDate) {
  //   //     if(fromDate !== muiValue[0] || toDate !== muiValue[1]) {
  //   //       console.log('Diff Effecting');
  //   //       setMuiValue([fromDate, toDate] as DateRange<Date>);
  //   //     }
  //   //   }
  //   // }
  //   if ((props.from as number) && (props.to as number)) {
  //     //var val = { from: props.from as number, to: props.to as number };

  //     handleSliderValueChange([props.from as number, props.to as number]);
  //   }
  //   // console.log('Stop Effecting');
  //   // console.log([props.from, props.to]);
  // }, [props.from, props.to, handleSliderValueChange]);

  //console.log([lowValue, highValue]);

  return (
    <React.Fragment>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          id="low-number"
          label={props.fromLabel}
          type="text"
          value={values[0]}
          onChange={handleLowChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            //TODO support for start adornment for dollar
            endAdornment: (
              <InputAdornment position="end">
                {props.valueSuffix}
              </InputAdornment>
            ),
            inputMode: "numeric",
            //pattern: "[0-9]*", //TODO find how to use pattern instead of type number
            inputProps: {
              min: { min },
              max: { max },
              style: { textAlign: "right" },
            },
          }}
        />
        <Slider
          getAriaLabel={(index: number) =>
            `${props.ariaLabel}, index of ${index}`
          }
          value={values}
          onChange={handleSliderChange}
          onChangeCommitted={handleSliderChangeCommited}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          min={min}
          max={max}
          step={props.step}
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <TextField
          id="high-number"
          label={props.toLabel}
          type="text"
          value={values[1]}
          onChange={handleHighChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {props.valueSuffix}
              </InputAdornment>
            ),
            inputMode: "numeric",
            //pattern: "[0-9]*",
            inputProps: {
              min: { min },
              max: { max },
              style: { textAlign: "right" },
            },
          }}
        />
      </Stack>
      <Box sx={{ display: { xs: "block", md: "none" } }} mt={1} mx={1}>
        <Slider
          getAriaLabel={(index: number) =>
            `${props.ariaLabel}, index of ${index}`
          }
          value={values}
          onChange={handleSliderChange}
          onChangeCommitted={handleSliderChangeCommited}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          min={min}
          max={max}
          step={props.step}
        />
      </Box>
    </React.Fragment>
  );
}
