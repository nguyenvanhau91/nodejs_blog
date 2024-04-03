const Course = require("../models/Courses");
const { mongooseToObject } = require("../../util/mongoose");

// Loại bỏ các bản ghi có slug là null
Course.deleteMany({ slug: null })
    .then(() => {
        console.log('Đã loại bỏ các bản ghi có slug là null');
    })
    .catch(error => {
        console.error('Lỗi khi loại bỏ các bản ghi có slug là null:', error);
    });

// Tạo slug duy nhất cho mỗi khoá học trước khi lưu vào cơ sở dữ liệu
function makeUniqueSlug(name) {
    // Tạo slug từ tên của khoá học
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

    // Tạo slug duy nhất cho khoá học
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
