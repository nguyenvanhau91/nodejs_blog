const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  title: String,
  body: String,
  date: Date,
});
