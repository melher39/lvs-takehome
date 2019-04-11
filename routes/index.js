// this file is the "guide" for our api routes
// dependencies
const router = require("express").Router();
const apiRoutes = require("./api");

// /api url route
router.use("/api", apiRoutes);

// export our router to be used elsewhere
module.exports = router;