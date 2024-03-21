"use client";
import {
  Container,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Button,
  Grid,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  AccordionActions,
  Link,
  Divider,
  Box,
  AppBar,
  Toolbar,
  ButtonGroup,
  IconButton,
  Chip,
  Avatar,
  Fab
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TelegramIcon from "@mui/icons-material/Telegram";
import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";

export default function ChatBot() {
  return (
    <Container sx={{ width: "450px", marginY: 4 }}>
      <Container
        sx={{ width: "400px", marginY: 4, borderColor: "#000", borderStyle: "solid", borderWidth: 1, height: "600px" }}
        disableGutters>
        <Stack useFlexGap justifyContent="space-between" direction="column" height="100%">
          <Box
            sx={{ backgroundColor: theme => theme.palette.emphasis.main, color: "#fff", padding: 2, height: "auto" }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignContent="center" alignItems="center" justifyContent="center">
                <Avatar sx={{ bgcolor: "#fff", height: 56, width: 56 }}>
                  <ThreePOutlinedIcon fontSize="large" />
                </Avatar>
                <Typography variant="h3">Hi! I&apos;m your assistant!</Typography>
              </Stack>
              <Typography>Ask me anything</Typography>
            </Stack>
          </Box>
          <Box padding={2} flexGrow={1}>
            <Stack alignItems="center" spacing={2}>
              <Typography>Common questions</Typography>
              <Chip onClick={() => {}} label="Where do i apply?" variant="outlined" />

              <Chip onClick={() => {}} label="When does the class start" variant="outlined"></Chip>
            </Stack>
          </Box>
          <Box padding={2} sx={{ color: "primary" }}>
            <Button
              sx={{ color: "primary.dark", backgroundColor: "#f4c9c7" }}
              variant="contained"
              startIcon={<TelegramIcon />}
              endIcon={<RocketLaunchIcon />}
              fullWidth>
              Let&apos;s get started!
            </Button>
          </Box>
        </Stack>
      </Container>
      <Stack direction="row" justifyContent="flex-end">
        <Fab sx={{ bgcolor: theme => theme.palette.emphasis.main, color: "#fff" }}>
          <ExpandMoreIcon />
        </Fab>
      </Stack>
    </Container>
  );
}
