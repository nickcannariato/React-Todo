import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

export default function TaskForm(props) {
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={8} md={9} item style={{ paddingRight: 16 }}>
          <TextField
            type="text"
            value={props.newTaskInput}
            placeholder="Create new Task"
            onChange={props.getTaskSubject}
            onKeyUp={props.addTask}
            name="newTaskInput"
            fullWidth
          />
        </Grid>
        <Grid xs={4} md={3} item>
          <Button
            color="secondary"
            variant="contained"
            onClick={props.addTask}
            style={{ marginRight: 16 }}
          >
            Add task
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={props.onClear}
          >
            Clear completed
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
