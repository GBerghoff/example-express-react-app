# To-Do List Application Backend

overview of the backend setup for a To-Do List application. The backend is built using Express.js with CORS enabled, allowing cross-origin requests. It supports basic CRUD operations for managing tasks.

## Technology Stack
Runtime Environment: Node.js
Framework: Express.js

## Setup and Installation
Before running the server, ensure you have Node.js installed. Then, install the required packages using npm.

```
npm i
npm run start
```

## API Endpoints
- GET /api/tasks: Fetch all tasks.
- POST /api/tasks: Create a new task.
- DELETE /api/tasks/:id: Delete a task by ID.
- PUT /api/tasks/:id: Update a task by ID.
