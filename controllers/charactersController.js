// file where our API calls to the SWAPI will be made
// dependencies
const axios = require("axios");

// Define methods for the charactersController.js
module.exports = {
    // find all characters
    findAll: function (req, res) {
        axios
            .get("https://swapi.co/api/people/")
            .then(
                ({ data: { results } }) => res.json(results)
            )
            .catch(err => res.status(422).json(err));
    }

};