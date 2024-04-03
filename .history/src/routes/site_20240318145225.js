const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/Controller");

router.use("/:slug", newsController.detail);
router.use("/", newsController.index);

module.exports = router;
