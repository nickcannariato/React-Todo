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

  addTask = event => {
    event.preventDefault();
    this.setState({
      taskList: [
        ...this.state.taskList,
        {
          id: `task${Date.now()}`,
          subject: this.state.newTaskInput,
          completed: false
        }
      ],
      newTaskInput: ""
    });
  };

  completeTask = id => {
    const taskList = this.state.taskList.slice();
    const tasks = taskList.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
