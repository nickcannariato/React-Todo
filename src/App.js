import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a6172d"
    },
    secondary: {
      main: "#181842",
    }
  }
});

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
    if (event.keyCode && event.keyCode !== 13) {
      return
    } else { 
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
  }
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
      <MuiThemeProvider theme={theme}>
        <Paper
          elevation={0}
          style={{ padding: 0, margin: 0, backgroundColor: "#f4f5f9" }}
        >
          <AppBar color="primary" position="static" style={{ height: 64 }}>
            <Toolbar style={{ height: 64 }}>
              <Typography color="inherit">Tskr</Typography>
            </Toolbar>
          </AppBar>
          <TaskList
            taskList={this.state.taskList}
            completeTask={this.completeTask}
          />
          <TaskForm
            newTaskInput={this.state.newTaskInput}
            getTaskSubject={this.getTaskSubject}
            addTask={this.addTask}
            onClear={this.clearCompletedTasks}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}
