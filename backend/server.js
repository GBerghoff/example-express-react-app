import express from 'express';
import cors from 'cors';

// Initialize express application
const app = express();
// Set the port from the environment or default to 3000
const PORT = process.env.PORT || 3000;

// Use CORS middleware to enable cross-origin requests
app.use(cors());
// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for tasks
let tasks = [];

// GET endpoint to retrieve all tasks
app.get('/api/tasks', (req, res) => {
    // Respond with the array of tasks in JSON format
    res.json(tasks);
});

// POST endpoint to add a new task
app.post('/api/tasks', (req, res) => {
    // Create a new task with a unique ID and the body content
    const task = { id: Date.now(), ...req.body };
    // Add the new task to the array
    tasks.push(task);
    // Respond with the created task and 201 Created status
    res.status(201).json(task);
});

// DELETE endpoint to remove a task by ID
app.delete('/api/tasks/:id', (req, res) => {
    // Extract the id from the request parameters
    const { id } = req.params;
    // Filter the tasks array, removing the task with the matching ID
    tasks = tasks.filter(task => task.id.toString() !== id);
    // Respond with 204 No Content status to indicate successful deletion
    res.status(204).end();
});

// PUT endpoint to update a task by ID
app.put('/api/tasks/:id', (req, res) => {
    // Extract the id from the request parameters
    const { id } = req.params;
    // Find the index of the task in the array
    let taskIndex = tasks.findIndex(task => task.id.toString() === id);
    if (taskIndex > -1) {
        // If found, update the task with the new body content
        tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
        // Respond with the updated task
        res.json(tasks[taskIndex]);
    } else {
        // If not found, respond with 404 Not Found status
        res.status(404).send('Task not found');
    }
});

// Start the server listening on the specified PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
