import {
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  Paper,
  Box,
} from "@mui/material";

const disciplines = [
  "Law Studies",
  "Business Law Studies",
  "International Law Studies",
  "Administrative Law Studies",
  "Jurisprudence",
  "National Law Studies",
  "Economic Law Studies",
  "Human Rights Law Studies",
  "Dispute Resolution Studies",
  "Civil Law Studies",
];

export default function ProgramsByDiscipline() {
  return (
    <Container
      maxWidth={false}
      sx={{
        paddingY: 2,
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor: (theme) => theme.palette.background.default,
        background: (theme) =>
          `linear-gradient(to bottom, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 50%, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 100% )`,
        '& img.invertable': {
          filter: (theme) => theme.palette.mode == 'dark' ? 'invert(100%) sepia(100%) saturate(2%) hue-rotate(193deg) brightness(109%) contrast(101%);' : undefined
        }
        }}
    >
      <Container>
        <Stack direction="row">
          <Typography variant="h4" fontWeight="bold">
            Discover law programs by discipline
          </Typography>
          <Button
            variant="outlined"
            color="emphasis"
            sx={{ marginLeft: "auto" }}
          >
            View all disciplines
          </Button>
        </Stack>
        <Container>
          <Grid
            my={2}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            sx={{
              "--Grid-borderWidth": "1px",
              borderTop: "var(--Grid-borderWidth) solid",
              borderLeft: "var(--Grid-borderWidth) solid",
              borderColor: "background.default",
              "& > div": {
                borderRight: "var(--Grid-borderWidth) solid",
                borderBottom: "var(--Grid-borderWidth) solid",
                borderColor: "background.default",
              },
            }}
          >
            {disciplines.map((m) => (
              <Grid xs={6} md={4} lg={3} key={m} item>
                <Paper
                  square
                  elevation={0}
                  sx={{
                    padding: 4,
                    paddingBottom: 6,
                  }}
                >
                  <Stack
                    //mx={6}
                    my={1}
                    alignContent="center"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_38/v1663149357/icons/law_studies_inp708.svg"
                      width="38"
                      height="38"
                      alt=""
                      style={{ height: "38px" }}
                      loading="lazy"
                      class="invertable"
                    />
                  </Stack>
                  <Typography
                    align="center"
                    sx={{ overflowY: "visible", maxHeight: "1rem" }}
                  >
                    {m}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}
