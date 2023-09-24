import mongoose from "mongoose";  // Import mongoose library

// Define mongoose schema for 'Books' collection
const booksSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please provide name of the book'], //Title is manadatory
        unique: true,
        trim: true, // For remove whitespaces at beginning or at end
    },
    author:{
        type: String,
        required: [true, 'Please provide name of the author'], //Author is manadatory
        trim: true, // For remove whitespaces at beginning or at end
    }})

const Books = mongoose.model('Books',booksSchema)

export default Books