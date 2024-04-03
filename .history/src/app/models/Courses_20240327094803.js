const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLengght },
  title: String,
  body: String,
  date: Date,
});
