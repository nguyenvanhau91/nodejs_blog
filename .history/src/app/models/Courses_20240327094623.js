const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
  });
