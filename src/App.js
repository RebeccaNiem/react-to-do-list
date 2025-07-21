import "./App.css";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function handleAddTask() {
    const newTask = {
      text: input,
      complete: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toogleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={function (event) {
          if (event.key === "Enter") {
            handleAddTask();
          }
        }}
        placeholder="Add a new task"
      />

      <button onClick={handleAddTask}>Add task</button>

      <ul>
        {tasks.map(function (task, index) {
          return (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={function () {
                    toogleTask(index);
                  }}
                />

                {task.text}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
