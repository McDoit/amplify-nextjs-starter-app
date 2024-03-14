import {
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const newPrograms = [
  {
    Instituition: "University of Law SQE",
    Course: "SQE1 Exam Preparation Course - Part-time evening",
    InstituitionImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_100/element/15/154756_Skjermbilde2021-03-12kl.09.39.42.png",
    Locations: ["London, United Kingdom", "Manchester, United Kingdom"],
  },
  {
    Instituition: "University of Law SQE",
    Course: "SQE1 Exam Preparation Course - Part-time day",
    InstituitionImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_100/element/15/154756_Skjermbilde2021-03-12kl.09.39.42.png",
    Locations: [
      "London, United Kingdom",
      "Manchester, United Kingdom",
      "Stoke-on-Trent, United Kingdom",
    ],
  },
  {
    Instituition: "Queen's University Belfast",
    Course: "LLM Law and Technology",
    InstituitionImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_100/element/13/136041_QUBlogo.png",
    Locations: ["Belfast, United Kingdom"],
  },
  {
    Instituition: "Queen's University Belfast",
    Course: "LLM International Human Rights Law",
    InstituitionImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_100/element/13/136041_QUBlogo.png",
    Locations: ["Belfast, United Kingdom"],
  },
  {
    Instituition: "Queen's University Belfast",
    Course: "LLM Criminology and Criminal Justice",
    InstituitionImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_100/element/13/136041_QUBlogo.png",
    Locations: ["Belfast, United Kingdom"],
  },
  {
    Instituition: "Queen's University Belfast",
    Course: "LLM International Commercial and Business Law",
    InstituitionImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_100/element/13/136041_QUBlogo.png",
    Locations: ["Belfast, United Kingdom"],
  },
];

export default function NewlyAddedPrograms() {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Typography variant="h4" fontWeight="bold">
        Newly added law programs
      </Typography>
      <Stack
        paddingY={2}
        paddingX={1}
        direction="row"
        spacing={4}
        sx={{ overflowX: "scroll" }}
      >
        {newPrograms.map((item) => (
          <Card
            key={item.Course}
            sx={{
              py: 2,
              width: 300,
              minWidth: 300,
              minHeight: 225,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Stack spacing={2}>
                <img
                  src={item.InstituitionImgUrl}
                  width="100%"
                  height="70"
                  alt={item.Instituition}
                  style={{
                    maxHeight: "70px",
                    maxWidth: "100px",
                    objectFit: "scale-down",
                  }}
                  loading="lazy"
                />
                <Typography fontWeight="bold">{item.Course}</Typography>
                <Link>{item.Instituition}</Link>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PlaceOutlinedIcon />
                  <Typography>
                    {item.Locations.reduce((acc, x) =>
                      acc === null ? x : `${acc} | ${x}`
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions disableSpacing sx={{ mt: "auto", ml: "auto" }}>
              <Button endIcon={<ArrowForwardIcon />}>More information</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
