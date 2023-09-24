# Book Library Service

The Book Library Service is a RESTful API that allows users to manage a library of books. Users can add, retrieve, update, and delete books from the library using HTTP requests.

## Features

- Create and add new books to the library.
- Retrieve a list of all books in the library.
- Retrieve details of a specific book by its ID.
- Update existing book details.
- Delete books from the library.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Postman (for testing)
- dotenv (for environment variables)

## API Endpoints

The API provides the following endpoints:

### `POST /api/books`

Create a new book.

### `GET /api/books`

Retrieve all books.

### `GET /api/books/:id`

Retrieve a specific book by ID.

### `PUT /api/books/:id`

Update a specific book by ID.

### `DELETE /api/books/:id`

Delete a specific book by ID.
