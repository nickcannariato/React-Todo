import React from "react";
import TaskList from "./components/TodoComponents/TaskList";
import TaskForm from "./components/TodoComponents/TaskForm";

const tasks = [
  {
    id: "task-1550090520702",
    subject: "Pick Jay up from School",
    complete: false
  },
  {
    id: "task-1550090526089",
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
          id: `task-${Date.now()}`,
          subject: this.state.newTaskInput,
          complete: false
        }
      ],
      newTaskInput: ""
    });
  };

  completeTask = id => {
    let taskList = this.state.taskList.slice();
    taskList = taskList.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ taskList });
  };

  clearCompletedTasks = e => {
    e.preventDefault();
    let taskList = this.state.taskList.slice();
    taskList = taskList.filter(task => !task.complete);
    this.setState({ taskList });
  };

  render() {
    return (
      <div>
        <TaskList
          taskList={this.state.taskList}
          completeTask={this.completeTask}
        />
        <TaskForm
          newTaskInput={this.state.newTaskInput}
          handler={this.getTaskSubject}
          addTask={this.addTask}
          onClear={this.clearCompletedTasks}
        />
      </div>
    );
  }
}
