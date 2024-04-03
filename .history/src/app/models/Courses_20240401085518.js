const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, req },
  description: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  videoID: { type: String, maxLength: 255 },
  level: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
