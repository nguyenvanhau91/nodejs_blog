const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class MeController {
  //todo [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
    .then(courses => res.render("me/stored-courses"))
    .catch(next);
    res.render("me/stored-courses");
  }
}

module.exports = new MeController();
