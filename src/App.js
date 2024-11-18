import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">To Do List</h1>
      <div className="mt-4">
        {/* TaskForm Component */}
        <TaskForm />

        {/* TaskList Component */}
        <TaskList />
      </div>
    </div>
  );
}

export default App;
