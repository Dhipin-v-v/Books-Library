import mongoose from 'mongoose' // Import mongoose library

const connectDB = () => {
  const mongoUri = process.env.MONGO_URI
  const password = process.env.MONGO_PASSWORD
  const uri = mongoUri.replace('<password>', password)  // Replace the placeholder '<password>' in the URI with the actual password
  return mongoose.connect(uri) // Connect to the MongoDB database
}

export default connectDB
