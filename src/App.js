import React from "react";
import TaskList from "./components/TodoComponents/TaskList";
import TaskForm from "./components/TodoComponents/TaskForm";

const tasks = [
  {
    id: "task1550090520702",
    subject: "Pick Jay up from School",
    complete: false
  },
  {
    id: "task1550090526089",
    subject: "Buy groceries",
    complete: true
  }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: tasks,
      newTaskInput: ""
    };
  }

  getTaskSubject = event => {
    this.setState({
      newTaskInput: event.target.value
    });
  };

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
