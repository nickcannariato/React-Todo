import React from "react";

export default function Task(props) {
  return (
    <div>
      <p onClick={() => props.completeTask(props.task.id)}>
        {props.task.subject}
      </p>
    </div>
  );
}
