// this file will break down our API routes one more level
// dependencies
const router = require("express").Router();
const characters = require("./characters.js");

// /api/characters route
router.use("/characters", characters);

// export our router to be used elsewhere
module.exports = router;