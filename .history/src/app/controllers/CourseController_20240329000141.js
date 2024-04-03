const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  //todo [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug:  })
  }
}

module.exports = new CourseController();
