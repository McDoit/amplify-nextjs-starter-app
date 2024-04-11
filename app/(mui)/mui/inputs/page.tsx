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
} from "@mui/material";

import BugReportIcon from '@mui/icons-material/BugReport';

export default function Page() {
    return <Container>

    <Typography variant="h1">About Katja</Typography> 
    <Stack spacing={5}>
    <Paper sx={{padding:2}}>
      <Stack direction="row" spacing={2}>
    <Button fullWidth={false} variant="contained"> Press Erik </Button>
    <ButtonGroup fullWidth={false} variant="contained">
    <Button> Erik will survive </Button>
    <Button> All night long </Button>
    <Button> Who is Stacy? </Button>
    <Button color="primary"><BugReportIcon/></Button>
    </ButtonGroup>
    
    </Stack>
   </Paper>
   <Paper sx={{padding:2}}> 
   
   </Paper>

</Stack>


    </Container>;
  }
  