const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //todo [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/show", { course: mongooseToObject(co) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
