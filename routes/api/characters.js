// file to call our controller methods to retrieve all or single character info
const router = require("express").Router();
const charactersController = require("../../controllers/charactersController.js");

// url matches with /api/characters
// retrieve all character names
router.route("/")
    .get(charactersController.findAll);

// url matches with /api/characters/:name
// retrieve specific character data
router.route("/:name")
    .get(charactersController.findOne);

// export our router to be used elsewhere
module.exports = router;