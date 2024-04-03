const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

class MeController {
  //todo [GET] /me/stored/courses
  storedCourses(req, res, next) {
    res.render("me/stored-course");
  }
}

module.exports = new MeController();
