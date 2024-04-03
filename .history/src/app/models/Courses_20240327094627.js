const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
    name: ObjectId,
    title: String,
    body: String,
    date: Date
  });
