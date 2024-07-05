# Library Management System

A library management system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project includes user authentication, book management features, and secure access to book data using JSON Web Tokens (JWT).

## Features

- **User Authentication**: Users can sign up and log in.
- **JWT Authentication**: Implemented with an expiry time of 60 seconds for testing purposes.
- **Add Books**: Users can add books along with images.
- **View Books**: Users can view the books they have added.
- **User-Specific Data**: Books are associated with user IDs, ensuring that each user can only view and manage their own books.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/Library_Manag_SYS.git
    cd library-management-system
    ```

2. **Install dependencies for the backend**:
    ```sh
    cd backend
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```sh
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Start the backend server**:
    ```sh
    cd backend
    npm start
    ```

2. **Start the frontend development server**:
    ```sh
    cd frontend
    npm start
    ```

## API Endpoints

### User Authentication

- **Sign Up**: `POST /api/register`
    ```json
    {
        "username": "example",
        "password": "password"
    }
    ```

- **Log In**: `POST /api/login`
    ```json
    {
        "username": "example",
        "password": "password"
    }
    ```

### Book Management

- **Add Book**: `POST /api/addbooks`
    - Headers: `Authorization: Bearer <token>`
    - Body:
    ```json
    {
        "title": "Book Title",
        "author": "Author Name",
        "genre": "Genre",
        "description": "Book Description",
        "price": 19.99,
        "imageUrl": "http://example.com/image.jpg",
        "userId": "user_id_here"
    }
    ```

- **View Books**: `GET /api/getbooks/:userId`
    - Headers: `Authorization: Bearer <token>`

## JWT Authentication

JWT is used to secure the add and view books endpoints. Tokens have an expiry time of 60 seconds (for testing purposes). Ensure to refresh tokens or reauthenticate as needed.

## Folder Structure

