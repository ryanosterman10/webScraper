var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  title: {
    type: String
  },

  body: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;