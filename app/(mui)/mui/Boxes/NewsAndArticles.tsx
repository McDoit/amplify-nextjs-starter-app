import {
  Container,
  Stack,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Box,
  CardActions,
  Chip,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const smallNewsItems = [
  {
    imgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1672737197/iStock-1346156630_s6czu2.jpg",
    tags: ["Student Tips", "Education"],
    heading: "What is a Mock Trial?",
    date: "Jan 3, 2023",
  },
  {
    imgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1672651405/iStock-1365669010_bcnrpl.jpg",
    tags: ["Student Tips"],
    heading: "How to Achieve Work-Life Balance as a Law Student",
    date: "Jan 2, 2023",
  },
  {
    imgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1668010729/iStock-614971334_pr5ddp.jpg",
    tags: ["Student Tips"],
    heading: "Study Guide: How to study in Law School",
    date: "Nov 9, 2022",
  },
];

export default function NewsAndArticles() {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Stack direction="row">
        <Typography variant="h4" fontWeight="bold">
          News and Articles
        </Typography>
        <Button variant="outlined" color="emphasis" sx={{ marginLeft: "auto" }}>
          View all
        </Button>
      </Stack>
      <Typography>
        Read about important educational news, career information, and student
        experiences.
      </Typography>
      <Card sx={{ display: "flex", padding: 2, marginY: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1676972162/testing-educations-com-import/hero-image-20629.jpg"
        />
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            paddingBottom: 0,
          }}
        >
          <CardContent>
            <Typography variant="h6">
              TEST: Go Global MBA Scholarship 2023
            </Typography>
            <Typography variant="caption">Feb 16, 2023</Typography>
          </CardContent>
          <CardActions
            sx={{
              marginTop: "auto",
              marginLeft: "auto",
            }}
          >
            <Button endIcon={<ArrowForwardIcon />}>Read more</Button>
          </CardActions>
        </Box>
      </Card>
      <Stack direction="row" spacing={2}>
        {smallNewsItems.map((item, i) => (
          <Card
            id={item.heading}
            key={i}
            sx={{ padding: 2, display: "flex", flexDirection: "column" }}
          >
            <CardMedia component="img" src={item.imgUrl} />
            <CardContent>
              <Stack direction="row" spacing={2}>
                {item.tags.map((tag) => (
                  <Chip key={tag} id={tag} label={tag} color="emphasis" />
                ))}
              </Stack>
              <Typography variant="h6">{item.heading}</Typography>
              <Typography variant="caption">{item.date}</Typography>
            </CardContent>
            <CardActions
              sx={{
                marginTop: "auto",
                marginLeft: "auto",
              }}
            >
              <Button endIcon={<ArrowForwardIcon />}>Read more</Button>
            </CardActions>
          </Card>
        ))}
        {/* <Card sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1672737197/iStock-1346156630_s6czu2.jpg"
          />
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Chip label="Student Tips" color="emphasis" />
              <Chip label="Education" color="emphasis" />
            </Stack>
            <Typography variant="h6">What is a Mock Trial?</Typography>
            <Typography variant="caption">Jan 3, 2023</Typography>
          </CardContent>
          <CardActions
            sx={{
              marginTop: "auto",
              marginLeft: "auto"
            }}
          >
            <Button endIcon={<ArrowForwardIcon />}>Read more</Button>
          </CardActions>
        </Card>
        <Card sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1672651405/iStock-1365669010_bcnrpl.jpg"
          />
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Chip label="Student Tips" color="emphasis" />
            </Stack>
            <Typography variant="h6">
              How to Achieve Work-Life Balance as a Law Student
            </Typography>
            <Typography variant="caption">Jan 2, 2023</Typography>
          </CardContent>
          <CardActions
            sx={{
              marginTop: "auto",
              marginLeft: "auto"
            }}
          >
            <Button endIcon={<ArrowForwardIcon />}>Read more</Button>
          </CardActions>
        </Card>
        <Card sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_550/v1668010729/iStock-614971334_pr5ddp.jpg"
          />
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Chip label="Student Tips" color="emphasis" />
            </Stack>
            <Typography variant="h6">
              Study Guide: How to study in Law School
            </Typography>
            <Typography variant="caption">Nov 9, 2022</Typography>
          </CardContent>
          <CardActions
            sx={{
              marginTop: "auto",
              marginLeft: "auto"
            }}
          >
            <Button endIcon={<ArrowForwardIcon />}>Read more</Button>
          </CardActions>
        </Card>
       */}
      </Stack>
    </Container>
  );
}
