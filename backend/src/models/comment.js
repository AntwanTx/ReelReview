const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    name: { type: String, default: 'Anonymous' },
    rating: { type: Number, required: true },
    selectedMovie:{ type: String, required: true },
    comment: { type: String, default: '' },
})
const Comment = model('Comment', commentSchema);
module.exports = Comment;
