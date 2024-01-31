# Yash's Server

Yash's Server is a simple full-stack application where users can add themselves by providing some information and view others who have joined the server. It's built using Express and MongoDB at the backend and React with Tailwind CSS in the frontend.

## Features

1. **Add Profile**: Users can input their information including name, introduction, GitHub link, Twitter link, LinkedIn link, and interests to add themselves to the server.
2. **All Users**: Users can view all others who have added themselves to the server.

## Routes

1. **Home**: `/` - Home route of the app.
2. **Add Profile**: `/add-profile` - Route for adding a new profile.
3. **All Users**: `/all-users` - Route to view all users added to the server.

## Tech Stack

-   **Backend**:
    -   Express.js: A fast, unopinionated, minimalist web framework for Node.js.
    -   MongoDB: A document-oriented NoSQL database.
-   **Frontend**:
    -   React: A JavaScript library for building user interfaces.
    -   Tailwind CSS: A utility-first CSS framework for rapid UI development.

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies for both backend and frontend:

Backend

````bash
    cd backend/
    ```
````

````bash
    npm install
    ```
````

````bash
    npm run devstart
    ```
````

Frontend

````bash
    cd frontend/
    ```
````

````bash
    npm install
    ```
````

````bash
    npm run dev
    ```
````

````bash
    npm run tailwindWatch
    ```
````
