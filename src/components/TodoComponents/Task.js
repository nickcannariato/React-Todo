import React from "react";
import { ListItem, Checkbox, ListItemText } from "@material-ui/core";

export default function Task(props) {
  return (
    <ListItem
      divider={props.divider}
      onClick={() => props.completeTask(props.task.id)}
    >
      <Checkbox checked={props.task.complete} disableRipple />
      <ListItemText primary={props.task.subject} />
    </ListItem>
  );
}
