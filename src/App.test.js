import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container mt-4">
      {/* Title */}
      <h1 className="text-center mb-4">Task Manager</h1>

      {/* Task Form */}
      <TaskForm />

      {/* Task List */}
      <TaskList />
    </div>
  );
};

export default App;
