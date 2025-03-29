# Simple Notes App

This is a simple note-taking application built with a Quasar frontend and a Node.js/Express/MySQL backend. Users can create, read, update, and delete notes.

## Technologies Used

* **Frontend:**
    * Quasar Framework (Vue.js based)
* **Backend:**
    * Node.js
    * Express
    * MySQL

## Getting Started

Follow the instructions below to get the development environment running.

### Backend Setup

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Install backend dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file in the `backend` directory and add the following environment variables:**

    ```
    MYSQL_HOST='127.0.0.1'
    MYSQL_USER='root'
    MYSQL_PASSWORD='1234'
    MYSQL_DATABASE='notes'
    PORT=8080
    ```

    * Make sure to replace the placeholder values with your actual MySQL database credentials.

4.  **Start the backend server:**

    ```bash
    npm run start
    ```

    This command will start the Node.js/Express server.

### Frontend Setup

1.  **Navigate to the client directory:**

    ```bash
    cd client
    ```

2.  **Install frontend dependencies:**

    ```bash
    npm install
    ```

3.  **Start the Quasar development server:**

    ```bash
    quasar dev
    ```

    This command will build and start the Quasar development server, and the application will be accessible in your browser (usually at `http://localhost:8080`).

## Application Overview

This is a basic note application that allows users to perform the following actions:

* **Create:** Add new notes with a title and content.
* **Read:** View a list of all created notes.
* **Update:** Edit the title and content of existing notes.
* **Delete:** Remove notes from the application.

The frontend provides the user interface for interacting with the notes, and the backend handles the data storage and retrieval using the MySQL database.

## Backend API Endpoints (Example - May vary based on implementation)

While the specific API endpoints aren't detailed here, you can expect common RESTful API patterns for CRUD operations on notes, such as:

* `GET /api/notes`: Retrieve all notes.
* `POST /api/notes`: Create a new note.
* `GET /api/notes/:id`: Retrieve a specific note by its ID.
* `PUT /api/notes/:id`: Update an existing note.
* `DELETE /api/notes/:id`: Delete a note.

The frontend application will make HTTP requests to these backend endpoints to manage the notes data.
