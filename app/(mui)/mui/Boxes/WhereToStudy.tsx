import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from "@mui/material";

const studyLocations = [
  {
    Name: "Netherlands",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/61/61827_netherlands.jpg",
  },
  {
    Name: "Spain",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/11/110855_shutterstock_377505535.jpg",
  },
  {
    Name: "Australia",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/11/110854_shutterstock_1037552143.jpg",
  },
  {
    Name: "China",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/61/61801_china.jpg",
  },
  {
    Name: "Mexico",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/61/61824_mexico.jpg",
  },
  {
    Name: "South Africa",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/62/62112_south_africa.jpg",
  },
  {
    Name: "United Kingdom",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/13/131454_photo-1505761671935-60b3a7427bad.jpg",
  },
  {
    Name: "France",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/61/61809_france.jpg",
  },
  {
    Name: "Belgium",
    ImgUrl:
      "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_600/element/61/61795_belgium.jpg",
  },
];

export default function WhereToStudy() {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Stack direction="row">
        <Typography variant="h4" fontWeight="bold">
          Where to study law
        </Typography>
        <Button variant="outlined" color="emphasis" sx={{ marginLeft: "auto" }}>
          See all locations
        </Button>
      </Stack>
      <ImageList cols={3}>
        {studyLocations.map((item) => (
          <ImageListItem
            key={item.ImgUrl}
            sx={{
              "&:hover .appear-item": {
                display: "flex",
              },
              "&:hover .hide-item": {
                display: "none",
              },
            }}
          >
            <img
              src={item.ImgUrl}
              width="600"
              height="190"
              alt={item.Name}
              style={{ height: "190px" }}
              loading="lazy"
            />
            <Stack
              className="appear-item"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                margin: "auto",
                display: "none",
                backgroundColor: (theme) =>
                  theme.palette.background.default + "CC", //TODO
                //opacity: 0.8
              }}
            >
              <Button
                variant="contained"
                sx={{
                  position: "relative",
                  margin: "auto",
                  //color: "white"
                }}
                color="primary"
              >
                Read more about {item.Name}
              </Button>
            </Stack>
            <ImageListItemBar className="hide-item" title={item.Name}>
              {item.Name}
            </ImageListItemBar>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
