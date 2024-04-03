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
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;

    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(error => {

      });
  }

  //todo [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
    .then(courses => res.render("courses/edit", {
      course: mongooseToObject(courses)
    }))
    .catch(next);
  }
}

module.exports = new CourseController();
