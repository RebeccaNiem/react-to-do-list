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
    setTasks([tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>To-Do List</h1>
    </div>
  );
}

export default App;
