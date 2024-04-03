const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  createAt: { type: , maxLength: 255 },
  updateAt: { type: , maxLength: 255 },
});
