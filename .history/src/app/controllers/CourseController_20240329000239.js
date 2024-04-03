const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  //todo [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) => {res.json(course)}).catch(ne);
  }
}

module.exports = new CourseController();
