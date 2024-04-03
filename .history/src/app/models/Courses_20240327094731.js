const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
    name: {},
    title: String,
    body: String,
    date: Date
  });
