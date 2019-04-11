// file where our API calls to the SWAPI will be made
// dependencies
// we can use axios for our api requests
const axios = require("axios");

// Define methods for the charactersController.js
module.exports = {
    // find all characters
    // rundown: make a request to SWAPI, then retrieve the data and return it as json 
    findAll: function (req, res) {
        axios
            .get("https://swapi.co/api/people/")
            .then(
                ({ data: { results } }) => res.json(results)
            )
            // if we encounter error 422 (Unprocessable Entity), catch it and return it to us
            .catch(err => res.status(422).json(err));
    },

    // find one specific character by name and retrieve data and return it as json 
    findOne: function (req, res) {
        axios.get("https://swapi.co/api/people/", { params: { search: req.params.name } })
            .then(
                ({ data: { results } }) => res.json(results)
            )
            .catch(err => res.status(422).json(err));
    }

};