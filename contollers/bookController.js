import Books from '../db/models/Books.js' // Importing the Books model

// Controller function to add a new book to database
export const createBook = async (req, res) => {
  try {
    const { title, author } = req.body
    const book = new Books({ title, author })
    const savedBook = await book.save()
    res.status(201).json(savedBook)
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).json({ error: 'Book already exist' })
    }
    res.status(500).json({ error: error.errors.title.message })
  }
}

// Controller function to get all books
export const getAllbooks = async (req, res) => {
  try {
    const books = await Books.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: error.errors.title.message })
  }
}

// Controller function to get a specific book
export const getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id)
    if (!book) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Controller function to update a specific book
export const updateBook = async (req, res) => {
  try {
    const { title, author } = req.body
    const updatedBook = await Books.findByIdAndUpdate(
      req.params.id,
      { title, author },
      { new: true }
    )
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Controller function to delete a specific book
export const deleteBook = async (req, res) => {
  try {
    const { title, author } = req.body
    const deletedBook = await Books.findByIdAndRemove(req.params.id)
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.status(200).json({ message: 'Book deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
