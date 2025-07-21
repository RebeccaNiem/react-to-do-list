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
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />

      <button onClick={handleAddTask}>Add task</button>

      <ul>
        {tasks.map(function (task, index) {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
