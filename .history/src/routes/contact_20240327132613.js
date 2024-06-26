const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ContactController");

router.get("/add-friends", contactController.addFriend);
router.get("/", contactController.index);

module.exports = router;
