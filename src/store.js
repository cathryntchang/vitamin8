import { createStore } from "redux";

const initialState = {
  tasks: [], // Will store objects with id and text
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(), // Use timestamp as unique id
            text: action.payload
          }
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(taskReducer);
export default store;
