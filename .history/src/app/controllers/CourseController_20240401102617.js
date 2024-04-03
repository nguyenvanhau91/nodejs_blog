const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");
const slugify = require("slugify");

//todo Hàm tạo slug duy nhất
function makeUniqueSlug(name) {
  const baseSlug = slugify(name, { lower: true });
  let slug = baseSlug;
  let counter = 1;
  while (Course.exists({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
}

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

    //todo Tạo slug duy nhất cho khoá học
    const slug = makeUniqueSlug(formData.name);
    formData.slug = slug;

    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CourseController();
