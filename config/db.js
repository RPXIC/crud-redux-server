require('dotenv').config()
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB connected')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
