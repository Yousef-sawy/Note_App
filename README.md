# Simple Notes App

This is a simple note-taking application built with a Quasar frontend and a Node.js/Express/MySQL backend. Users can create, read, update, and delete notes. **Axios is used as the HTTP client in the frontend to communicate with the backend API.**

## Technologies Used

* **Frontend:**
    * Quasar Framework (Vue.js based)
    * **Axios:** Promise-based HTTP client for making API requests.
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
    MYSQL_HOST='127.0.0.1' (or locolhost)
    MYSQL_USER='root' (depends on your MySQL database config)
    MYSQL_PASSWORD='1234' (depends on your MySQL database config)
    MYSQL_DATABASE='notes' (name of schema in ur database)
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

    This command will build and start the Quasar development server, and the application will be accessible in your browser (usually at `http://localhost:8080`). The frontend uses Axios to make API calls to the backend.

## Application Overview

This is a basic note application that allows users to perform the following actions:

* **Create:** Add new notes with a title and content (see "Add New Note" screenshot).
* **Read:** View a list of all created notes (see "Main Page" screenshot) fetched from the backend using Axios.
* **Update:** Edit the title and content of existing notes (see "Edit Note" screenshot), with updates sent to the backend via Axios.
* **Delete:** Remove notes from the application, with deletion requests sent to the backend using Axios.

The frontend provides the user interface for interacting with the notes, and the backend handles the data storage and retrieval using the MySQL database. **Axios facilitates the communication between the frontend and backend for all data operations.**

## Backend API Endpoints for Testing

You can use tools like Postman or `Tunder client in vs` to test the following API endpoints after starting the backend server:

* **Get all notes:**
    ```
    GET http://localhost:8080/api/notes
    ```
    This endpoint retrieves a list of all notes from the database.

* **Create a new note:**
    ```
    POST http://localhost:8080/api/notes
    ```
    Request body should be a JSON object containing `title` and `content` for the new note. For example:
    ```json
    {
        "title": "My New Note",
        "content": "This is the content of my new note."
    }
    ```

* **Get a specific note by ID, Update a note, or Delete a note:**
    These endpoints require a specific note ID at the end of the URL. Replace `:id` with the actual ID of the note you want to interact with. For example, to interact with the note with ID `1`:

    * **Get a specific note:**
        ```
        GET http://localhost:8080/notes/1
        ```

    * **Update an existing note:**
        ```
        PUT http://localhost:8080/notes/1
        ```
        Request body should be a JSON object containing the updated `title` and/or `content`. For example:
        ```json
        {
            "title": "Updated Title",
            "content": "This is the updated content."
        }
        ```

    * **Delete a note:**
        ```
        DELETE http://localhost:8080/notes/1
        ```

**Important:** For the `PUT` and `DELETE` requests targeting a specific note, you **must** include the note's ID at the end of the URL (e.g., `/notes/1`). The `GET` request for a specific note also requires the ID.

## Screenshots

* **Main Page:**
    ![Main Page](https://github.com/user-attachments/assets/700c2e1a-549a-4d8e-b209-cef73f76c379)
  
    * This is the main page displaying a list of existing notes. Users can see the titles of their notes and have options to add new notes, edit existing ones, or delete them.

* **Add New Note:**
    ![Add New Note](https://github.com/user-attachments/assets/863b8088-55af-4af2-a970-c1c825c2636f)
  
    * This window allows users to create a new note by entering a title and the content of the note.

* **Edit Note:**
    ![Edit Note](https://github.com/user-attachments/assets/25187414-b474-4e89-a521-95cc95298c63)
  
    * This window enables users to modify the title and content of an existing note. The current title and content are pre-filled for easy editing.
