const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    img: { type: String },
    videoID: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);