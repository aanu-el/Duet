const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  body: {
    type: String,
    required: true
  },
  view_count: {
    type: Number,
    default: 0
  }
})

const PostModel = mongoose.model('Post', postSchema);

module.exports = {
  PostModel
}