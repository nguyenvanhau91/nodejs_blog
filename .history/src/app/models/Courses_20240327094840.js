const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 255 },
  img: { type: String, maxLength: 255 },
  createAt: { type: String, maxLength: 255 },
  name: { type: String, maxLength: 255 },
});
