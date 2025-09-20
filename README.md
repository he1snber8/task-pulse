# Task-Pulse

Description
-----------
TaskPulse is a web-based task management application that enables users to securely register, log in, and manage their tasks. Users can create, edit, delete, and organize tasks by project, with support for priority-based sorting. The front-end is built with React and the back-end uses Node.js and Express, with JWT for authentication.

## Tech Stack

- React
- Node.js
- Express
- JSON Web Tokens (jsonwebtoken)

## Requirements

- Implement JWT authentication for secure routes (Hint: Use jsonwebtoken library and store JWT_SECRET in an environment variable)
- Protect API endpoints with auth middleware (Hint: Mount auth middleware before task routes to enforce security)
- Design RESTful API for tasks (CRUD) (Hint: Use Express Router and HTTP verbs for each operation)
- Implement task categorization and priority sorting (Hint: Use array sort and include project categories in task model)
- Build React components for login and task display (Hint: Store JWT in localStorage and include in Authorization header)
- Adhere to coding best practices and modular structure (Hint: Organize code into modules, use linting tools)

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/your-username/task-pulse.git
   
2. Back-end setup:
   bash
   cd task-pulse/backend
   npm install
   
   - Create a `.env` file in `/backend`:
     env
     JWT_SECRET=your_jwt_secret_here
     PORT=5000
     
3. Front-end setup:
   bash
   cd ../frontend
   npm install
   
   - (Optional) Create a `.env` file in `/frontend`:
     env
     REACT_APP_API_URL=http://localhost:5000/api
     

## Usage

1. Start the back-end server:
   bash
   cd backend
   npm run dev
   
2. Start the front-end development server:
   bash
   cd frontend
   npm start
   
3. Open your browser and navigate to `http://localhost:3000`.
4. Register a new account or log in with existing credentials.
5. Create, view, edit, and delete tasks organized by project. Use priority sorting controls to reorder tasks.

## Implementation Steps

1. Initialize the Node.js project and install dependencies (`express`, `dotenv`, `jsonwebtoken`, etc.).
2. Set up project structure: `/controllers`, `/routes`, `/middleware`, `/models`.
3. Configure `dotenv` to load environment variables (e.g., `JWT_SECRET`).
4. Implement authentication routes (`/api/auth/register`, `/api/auth/login`) using `jsonwebtoken`.
5. Create `auth` middleware to verify tokens and protect subsequent task routes.
6. Define a Task model (in-memory or database) including fields: `title`, `description`, `project`, `priority`, `createdAt`.
7. Build RESTful routes for tasks (`GET`, `POST`, `PUT`, `DELETE` under `/api/tasks`) and apply auth middleware.
8. Initialize React app with `create-react-app` and install `axios` for HTTP requests.
9. Create React components: `LoginForm`, `RegisterForm`, `TaskList`, `TaskItem`, `TaskForm`.
10. Implement global auth context or hooks to store and retrieve JWT from `localStorage`.
11. Configure `axios` to include `Authorization: Bearer <token>` header on protected API calls.
12. Fetch tasks, then apply JavaScript array sorting by `priority` and filter by `project` in the UI.
13. Test all authentication flows and CRUD operations; enforce linting rules and code formatting.

## API Endpoints

- POST /api/auth/register  — Register a new user
- POST /api/auth/login     — Log in and receive a JWT
- GET /api/tasks           — Get all tasks (protected)
- POST /api/tasks          — Create a new task (protected)
- GET /api/tasks/:id       — Retrieve a single task by ID (protected)
- PUT /api/tasks/:id       — Update a task by ID (protected)
- DELETE /api/tasks/:id    — Delete a task by ID (protected)