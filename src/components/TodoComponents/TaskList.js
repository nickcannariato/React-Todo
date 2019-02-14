import React from "react";
import { List, Paper } from "@material-ui/core";

import Task from "./Task";

export default function TaskList(props) {
  return (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: "scroll" }}>
        {props.taskList.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              divider={props.taskList.length - 1}
              completeTask={props.completeTask}
            />
        ))}
      </List>
    </Paper>
  );
}
