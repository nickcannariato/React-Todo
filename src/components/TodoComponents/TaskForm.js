import React from "react";

export default function TaskForm(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.newTaskInput}
          placeholder="Create new Task"
          onChange={props.handler}
          name="newTaskInput"
        />
        <button type="submit" onClick={props.addTask}>
          Add task
        </button>
        <button onClick={props.onClear}>Clear completed tasks</button>
      </form>
    </div>
  );
}
