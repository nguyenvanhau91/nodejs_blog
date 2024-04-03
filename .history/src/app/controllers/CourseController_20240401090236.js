const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //todo [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //todo [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //todo [POST] /courses/store
  store(req, res, next) {
    const formData = 
    req.body.image = `https://files.fullstack.edu.vn/f8-prod/courses/6.png`;
    const course = new Course(req.body);
    course.save();
  }
}

module.exports = new CourseController();
