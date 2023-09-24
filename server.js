// Import necessary modules and libraries
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/db.js'
import routes from './routes/router.js'

// Load environment variables from a .env file
dotenv.config()

// Create an Express application
const app = express()
app.use(express.json())

app.use('/api',routes)

// Catching unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});


const PORT = process.env.PORT || 3000

// Asynchronous function to start the server
const startServer = async () => {
  try {
    await connectDB() // Connect to the database using the custom connectDB function
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    }) // Start the Express server
  } catch (error) {
    console.log('Database connection failed')
  }
}

// Invoking the synchronous function to start the server
startServer()
