import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  // State to track input field
  const [taskName, setTaskName] = useState("");

  // Redux dispatch function
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (taskName.trim()) {
      // Dispatch an action to add the task
      dispatch({
        type: "ADD_TASK",
        payload: taskName,
      });

      // Clear input field
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        {/* Input Field */}
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
