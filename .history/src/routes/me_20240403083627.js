const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/MeController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;
