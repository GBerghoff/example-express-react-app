import axios from 'axios';

// Base URL for the task API
const API_URL = 'http://localhost:3000/api/tasks';

// Function to fetch all tasks from the backend
export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL); // Sending a GET request to the API
    return response.data; // Return the data received from the backend
  } catch (error) {
    console.error('Error fetching tasks:', error); // Log error if request fails
    return []; // Return an empty array in case of error
  }
};

// Function to add a new task to the backend
export const addTask = async (title) => {
  try {
    const response = await axios.post(API_URL, { title }); // Sending a POST request with the new task's title
    return response.data; // Return the newly added task received from the backend
  } catch (error) {
    console.error('Error adding task:', error); // Log error if request fails
  }
};

// Function to delete a task by its ID
export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`); // Sending a DELETE request for a specific task ID
  } catch (error) {
    console.error('Error deleting task:', error); // Log error if request fails
  }
};

// Function to edit/update a task by its ID
export const editTask = async (id, title) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { title }); // Sending a PUT request with the new title for the task
    return response.data; // Return the updated task received from the backend
  } catch (error) {
    console.error('Error updating task:', error); // Log error if request fails
  }
};
