"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";
import useSWR from "swr";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import {
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
  LinearProgress,
} from "@mui/material";

import config from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

Amplify.configure(config);

const client = generateClient<Schema>(); // use this Data client for CRUDL requests

const columns: GridColDef[] = [
  { field: "content", headerName: "Content", width: undefined },
  { field: "priority", headerName: "Priority", width: 120 },
  { field: "isPublic", headerName: "Is Public", width: 120 },
  { field: "isDone", headerName: "Is Public", width: 120 },
  { field: "owner", headerName: "User", width: 200 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

interface TodoModel {
  content: string;
  priority: "Low" | "Medium" | "High" | undefined;
  isDone: boolean;
  isPublic: boolean;
}

export default function Page() {
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);
  const [loading, setLoading] = useState(true);

  function listTodos() {
    // fetch all todos
    client.models.Todo.list().then((response) => {
      console.log(response);
      setLoading(false);
      setTodos(response.data);
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  //const { data: todos } = client.models.Todo.list();
  //const { data, error } = useSWR('/api/profile-data', fetcher)

  const [priority, setPriority] = useState("Medium");

  const { handleSubmit, register } = useForm<TodoModel>();

  const onSubmit = (value: SubmitHandler<TodoModel>) => {
    console.log(typeof value);
    alert(JSON.stringify(value));
  };

  const onSubmit2: SubmitHandler<TodoModel> = (data, event) => {
    console.log(data);

    event?.preventDefault();

    client.models.Todo.create(data).then((data) => {
      console.log(data);
      setTodos((todos) => [...todos, data.data]);
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  //https://stackoverflow.com/a/69797126/347012

  return (
    <Container>
      <Stack spacing={2} marginY={2}>
        <Paper sx={{ padding: 4 }}>
          {!loading && (
            <DataGrid
              rows={todos}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          )}
          {loading && <LinearProgress />}
        </Paper>
        <Paper sx={{ padding: 4 }}>
          <Authenticator>
            <Box sx={{ minWidth: 120 }}>
              <form onSubmit={handleSubmit(onSubmit2)}>
                <Stack spacing={2}>
                  <TextField
                    id="outlined-basic"
                    label="Content"
                    variant="outlined"
                    {...register("content")}
                  />
                  <Stack direction="row" spacing={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Priority
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //value={priority}
                        label="Priority"
                        defaultValue="Medium"
                        {...register("priority")}
                      >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControlLabel
                      control={<Switch />}
                      label="Done"
                      {...register("isDone")}
                    />
                    <FormControlLabel
                      control={<Switch />}
                      label="Public"
                      {...register("isPublic")}
                    />
                  </Stack>
                  <Button variant="contained" color="secondary" type="submit">
                    Save
                  </Button>
                </Stack>
              </form>
            </Box>
          </Authenticator>
        </Paper>
      </Stack>
    </Container>
  );
}
