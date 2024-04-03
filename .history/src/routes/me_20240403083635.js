const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/create", meController.create);
router.post("/store", meController.store);
router.get("/:slug", meController.show);

module.exports = router;
