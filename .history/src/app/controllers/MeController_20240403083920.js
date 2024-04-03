const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class MeController {
  //todo [GET] /courses/:slug
  storedCoures(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
