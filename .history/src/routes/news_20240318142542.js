const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");
const NewsController = require("../app/controllers/NewsController");

router.use("/", NewsController.index);

module.exports = router;
