# To-Do List Full Stack Application

## Architecture Overview
- Frontend: Built with React, utilizing Vite for an efficient development environment and bundled production build. The frontend communicates with the backend through RESTful API calls, facilitated by Axios for handling HTTP requests.
- Backend: Developed with Node.js and Express, providing a set of REST API endpoints for task management. It includes middleware for CORS to allow cross-origin requests from the frontend.

## Project Structure
The project is organized into two main directories:

- /frontend: Contains the React application code, including components, services for API calls, and the application entry point.
- /backend: Houses the Express server code, API endpoints, and the logic for managing tasks in-memory.

## Key Features
- Task Management: Users can interact with a simple and intuitive interface to manage their tasks.
- RESTful API: The backend provides a RESTful API for task operations, adhering to best practices in API development.
- Cross-Origin Resource Sharing (CORS): Configured to allow the frontend to make requests to the backend seamlessly.
- Modern JavaScript Features: Uses ES6+ features for cleaner and more efficient code.
## Getting Started
To get the application running, you will need to set up both the frontend and backend. Each part has its own set of dependencies and run scripts. Detailed instructions are available within the respective README files in the /frontend and /backend directories.

## Prerequisites
- Node.js: Ensure you have Node.js installed on your machine to run the backend server and the frontend 
