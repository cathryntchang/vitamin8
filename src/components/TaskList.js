import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  // Access tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch({
      type: "DELETE_TASK",
      payload: taskId,
    });
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task.text}
              <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;