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
      .catch((error) => {});
  }

  //todo [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //todo [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //todo [GET] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({_id: req.})
    .then(() => res.redirect("/me/stored/courses"))
    .catch(next);
  }
}

module.exports = new CourseController();
