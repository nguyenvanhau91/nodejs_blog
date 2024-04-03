const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ConController");

router.use("/:slug", newsController.detail);
router.use("/", newsController.index);

module.exports = router;
