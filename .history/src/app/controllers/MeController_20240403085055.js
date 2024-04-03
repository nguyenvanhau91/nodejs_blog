const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class MeController {
  //todo [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => res.render("me/stored-courses, {Ơ}"))
      .catch(next);
  }
}

module.exports = new MeController();
