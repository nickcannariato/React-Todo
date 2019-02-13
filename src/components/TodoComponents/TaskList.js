import React from "react";
import Task from "./Task";

export default function TaskList(props) {
  return (
    <div className="todolist-wrapper">
      {props.taskList.map(task => {
        return (
          <Task key={task.id} task={task} completeTask={props.completeTask} />
        );
      })}
    </div>
  );
}
