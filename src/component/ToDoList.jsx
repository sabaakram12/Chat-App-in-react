import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [taskInput, setTaskInput] = useState(''); // State to hold input field value

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput(''); // Clear input after adding task
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update task status
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Remove the task
  };

  return ( 
    <div className="flex flex-col items-center mt-8 justify-center mb-10 border-black border-4 h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
          className="border p-2 mr-2 rounded"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Task
        </button>
      </div>
      <ul className="w-1/3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`p-2 mb-2 flex justify-between items-center rounded border ${
              task.completed ? 'bg-green-200 line-through' : 'bg-white'
            }`}
          >
            <span>{task.text}</span>
            <div>
              <button
                onClick={() => toggleComplete(index)}
                className="mr-2 bg-yellow-500 text-white px-2 mb-3  py-1 rounded"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
