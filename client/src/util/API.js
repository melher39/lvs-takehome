// this file will be responsible for our API requests from the client
// dependencies
import axios from "axios";

export default {
    // this method will be used to search for all the character names
    allCharactersSearch: function () {
        return axios.get("/api/characters");
    },
    // this will look up the specific character
    characterDetails: function(name) {
        return axios.get("/api/characters/" + name);
    }
}