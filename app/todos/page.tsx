"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";
import useSWR from "swr";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Container,
  Box,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  SelectChangeEvent,
} from "@mui/material";

import config from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import { setPriority } from "os";

Amplify.configure(config);

const client = generateClient<Schema>(); // use this Data client for CRUDL requests

export default function Page() {
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);

  function listTodos() {
    // fetch all todos
    client.models.Todo.list().then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  //const { data: todos } = client.models.Todo.list();
  //const { data, error } = useSWR('/api/profile-data', fetcher)

  const [priority, setPriority] = useState("Medium");

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  return (
    <Container>
      <Stack spacing={2} marginY={2}>
        <Paper sx={{ padding: 4 }}>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.content} - {todo.priority ?? "Medium"}
              </li>
            ))}
          </ul>
        </Paper>
        <Paper sx={{ padding: 4 }}>
          {/* <Authenticator> */}
          <Box sx={{ minWidth: 120 }}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"
                label="Content"
                variant="outlined"
              />
              <Stack direction="row" spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Priority
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority}
                    label="Priority"
                    //defaultValue="Medium"
                    onChange={handleChange}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>
                <FormControlLabel control={<Switch />} label="Done" />
                <FormControlLabel control={<Switch />} label="Public" />
              </Stack>
              <Button variant="contained" color="secondary">
                Save
              </Button>
            </Stack>
          </Box>
          {/* </Authenticator> */}
        </Paper>
      </Stack>
    </Container>
  );

  return <div>About</div>;
}
