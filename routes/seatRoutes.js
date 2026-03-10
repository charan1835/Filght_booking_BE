const express = require("express");
const router = express.Router();
const seatController = require("../controllers/seatController");

router.get("/", seatController.getSeats);
router.get("/:id", seatController.getSeatById);

module.exports = router;
