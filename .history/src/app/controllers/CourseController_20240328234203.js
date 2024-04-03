const Course = require("../models/Courses");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();