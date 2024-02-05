import { useState, useEffect } from 'react';
// Importing CRUD operations from taskService
import { fetchTasks, addTask, deleteTask, editTask } from './services/taskService';

function App() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);

  // useEffect to fetch tasks on component mount
  useEffect(() => {
    const getTasks = async () => {
      const fetchedTasks = await fetchTasks(); // Fetch tasks from the backend
      setTasks(fetchedTasks); // Update state with fetched tasks
    };

    getTasks();
  }, []); // Empty dependency array means this effect runs once on mount

  // Handler for adding a new task
  const handleAddTask = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const title = event.target.elements.title.value; // Get the title from the form input
    const newTask = await addTask(title); // Send the title to backend to create new task
    setTasks([...tasks, newTask]); // Add new task to the state
    event.target.reset(); // Reset the form input after submission
  };

  // Handler for deleting a task
  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId); // Send the taskId to backend to delete
    setTasks(tasks.filter(task => task.id !== taskId)); // Update the state by filtering out the deleted task
  };

  // Handler for editing a task
  const handleEditTask = async (id) => {
    const newTitle = prompt('Edit task title:'); // Prompt user for new title
    if (newTitle) { // Check if newTitle is not null or empty
      const updatedTask = await editTask(id, newTitle); // Send the new title to backend to update the task
      setTasks(tasks.map(task => task.id === id ? updatedTask : task)); // Update the task in the state
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      {/* Form input for adding a new task */}
      <form onSubmit={handleAddTask}>
        <input name="title" type="text" required />
        <button type="submit">Add Task</button>
      </form>
      {/* List of tasks */}
      <ul>
        {tasks.map((task) => ( // Map over tasks and generate a list item for each task
          <li key={task.id}>
            {task.title}
            {/* Buttons for editing and deleting a task */}
            <button onClick={() => handleEditTask(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
