import mongoose from "mongoose";

// Defining Schema
const postSchema = new mongoose.Schema({
  message: { type: String, required: true, trim: true },
})

// Model
const MessageModel = mongoose.model('secret', postSchema)

export default MessageModel