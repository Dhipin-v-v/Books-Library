import express from 'express'
import {
  createBook,
  deleteBook,
  getAllbooks,
  getBookById,
  updateBook,
} from '../contollers/bookController.js'

// Define routes and their corresponding controller functions
const router = express.Router()  // Creating an Express router

router.post('/',createBook) // Route to create a new book
router.get('/',getAllbooks) // Route to get all books
router.get('/:id',getBookById) // Route to get a book by its ID
router.put('/:id',updateBook) // Route to update a book by its ID
router.delete('/:id',deleteBook) // Route to delete a book by its ID

export default router
