import { Box, Button, Container, Stack, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerLinks = [
  "About us",
  "Promote your program",
  "Contact us",
  "Terms and Conditions",
  "Privacy Policy",
];

export default function Footer({ openThemeDialog } : { openThemeDialog: any}) {
  return (
    <Box sx={{ paddingY: 2, backgroundColor: "#434f66" }}>
      <Container>
        <Box sx={{ paddingY: 2 }}>
          <img
            src="https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_170/v1603969367/keystone_logos/dark/keystone-lawstudies.svg"
            width="170"
            height="40"
            alt="Keystone logo"
            style={{ height: 40 }}
            loading="lazy"
          />
        </Box>
        <Typography fontWeight="bold" color="white" sx={{ paddingY: 2 }}>
          Browse thousands of graduate degrees around the world
        </Typography>
        <Stack
          sx={{ paddingY: 2 }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color="white" sx={{ maxWidth: 550 }}>
            Studying law opens doors to many professions around the world. With
            LAWSTUDIES, students can connect to law schools and programs and
            find the right law degree for their career aspirations. As a trusted
            part of the Keystone Education Group family of multi-lingual,
            student-centered websites, LAWSTUDIES is the key to law studies at
            all levels. Students use LAWSTUDIES to find LLBs and LLMs, MLS
            degrees, Law PhDs, paralegal courses, postgraduate law diplomas, and
            many other legal qualifications in countries around the world.
          </Typography>
          <Stack direction="row" spacing={1}>
            <LinkedInIcon
              sx={{ color: "#0e76a8", backgroundColor: "white" }}
              fontSize="large"
            />
            <InstagramIcon
              sx={{ color: "white", backgroundColor: "#405de6" }}
              fontSize="large"
            />
            <FacebookIcon
              sx={{ color: "#1877F2", backgroundColor: "white" }}
              fontSize="large"
            />
          </Stack>
        </Stack>

        <Stack sx={{ paddingY: 2 }} direction="row" spacing={1}>
          {footerLinks.map((m, i) => (
            <Button key={i}>{m}</Button>
          ))}
        </Stack>
      </Container>
      <Container disableGutters>
        <Box onClick={openThemeDialog}>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              backgroundColor: "red",
              padding: 1,
            }}
          >
            XS
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "none" },
              backgroundColor: "yellow",
              padding: 1,
            }}
          >
            SM
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block", lg: "none" },
              backgroundColor: "green",
              padding: 1,
            }}
          >
            MD
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "block", xl: "none" },
              backgroundColor: "blue",
              padding: 1,
            }}
          >
            LG
          </Box>
          <Box
            sx={{
              display: { xs: "none", xl: "block" },
              backgroundColor: "purple",
              padding: 1,
            }}
          >
            XL
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
