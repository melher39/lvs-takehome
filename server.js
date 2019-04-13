// import dependencies
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");

// initialize Express
const app = express();
// API PORT for local use, PORT 3000 will be for client (react app)
const PORT = process.env.PORT || 3001;

// Use morgan logger for logging http requests
// this logger is actually very useful
app.use(logger("dev"));

// setup express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// code to properly deploy (to heroku in our case)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// give express access to our routes
app.use(routes);

// Start the API server on PORT 3001
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});