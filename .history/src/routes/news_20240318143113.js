const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.use("/news-detail", newsController.show);
router.use("/", newsController.index);

module.exports = router;
