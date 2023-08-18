const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
     stars: { type: Number, required: true },
     movie:{ type: String, required: true },
    content: { type: String, default: '' },
})
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
