const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ContactController");

router.use("/add-friends", contactController.addFriend);
router.use("/", contactController.index);

module.exports = router;
