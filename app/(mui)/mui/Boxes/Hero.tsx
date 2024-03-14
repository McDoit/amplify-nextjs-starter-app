import {
  Container,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Button,
  Box,
} from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `linear-gradient(#434f66B3, #434f66B3),url("https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/c_fill/w_1280/v1575889922/element/12/126281_photo-1524995997946-a1c2e315a42f.jpg")`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        height: "100%",
        width: "100%",
      }}
    >
      <Container>
        <Stack alignItems="center" py={8} spacing={4} justifyContent="center">
          <Typography color="white" variant="h4" align="center">
            Browse thousands of law degrees from around the world.
          </Typography>
          <Container>
            <Stack
              direction="row"
              alignItems="stretch"
              justifyContent="space-evenly"
              //alignContent="center"
              spacing={4}
              // useFlexGap
              // flexGrow={4}
              // flexWrap="wrap"
              // flex="1 1 0"
              //sx={{ backgroundColor: "#00f" }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-what"
                options={["IT", "Cooking", "Gardening"]}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      //fullWidth: true,
                      sx: {
                        //width: "100%",
                        borderRadius: (theme) => theme.shape.borderRadius / 12,
                        backgroundColor: (theme) =>
                          theme.palette.background.paper,
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                        },
                        "&.Mui-focused": {
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                        },
                      },
                      disableUnderline: true,
                    }}
                    variant="filled"
                    label="What do you want to study?"
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={["Sweden", "Italy", "Germany"]}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin="none"
                    InputProps={{
                      ...params.InputProps,
                      fullWidth: true,
                      sx: {
                        borderRadius: (theme) => theme.shape.borderRadius / 12,
                        backgroundColor: (theme) =>
                          theme.palette.background.paper,
                        "&:hover": {
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                        },
                        "&.Mui-focused": {
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                          // borderBottomRightRadius: 0,
                          // borderBottomLeftRadius: 0,
                        },
                      },
                      disableUnderline: true,
                    }}
                    variant="filled"
                    label="Where do you want to study?"
                  />
                )}
              />
              {/* <Box sx={{ height: "auto" }}> */}
              <Button
                sx={{ height: "auto", paddingX: { xs: 4, md: 8 } }}
                variant="contained"
                size="large"
                color="emphasis"
              >
                Search
              </Button>
              {/* </Box> */}
            </Stack>
          </Container>
          <Typography color="white">Or</Typography>
          <Button
            size="large"
            variant="outlined"
            color="contrast"
            sx={{
              whiteSpace: "nowrap",
              py: 2,
              px: 4,
              // color: (theme) => theme.palette.contrast.main,
              // borderColor: (theme) => theme.palette.contrast.main,
            }}
          >
            Browse Fields of Study
          </Button>
          {/* <Button
            size="large"
            variant="contrast"
            sx={{ whiteSpace: "nowrap", p: 2, px: 4 }}
          >
            Browse Fields of Study
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="contrast"
            sx={{ whiteSpace: "nowrap", p: 2, px: 4 }}
          >
            Browse Fields of Study
          </Button> */}
        </Stack>
      </Container>
    </Container>
  );
}
