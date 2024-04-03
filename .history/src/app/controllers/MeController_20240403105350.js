const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  //todo [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => res.render("me/stored-courses", {
        courses: multipleMongooseToObject(courses)
      }))
      .catch(next);
  }

  storedNews()
}

module.exports = new MeController();
