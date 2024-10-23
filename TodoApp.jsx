// src/TodoApp.js
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
      setTaskText('');
    }
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
        <button onClick={clearTasks}>Clear All</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="text"
              value={task.text}
              onChange={e => editTask(task.id, e.target.value)}
            />
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
