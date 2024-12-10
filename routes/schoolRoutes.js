const express = require("express");
const router = express.Router();

const {
  addSchoolController,
  getNearSchoolsController,
} = require("./../controllers/schoolController");

router.post("/addSchool", addSchoolController);
router.get("/getSchool", getNearSchoolsController);

module.exports = router;
