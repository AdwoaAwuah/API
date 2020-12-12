// Importing express
let express = require('express');
let bodyParser = require('body-parser');


// Initializing the app
let app = express();

// serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./src/route/routes.js')(app, fs);


// Define server port
const PORT = process.env.port || 3000;


// Listen to specified port(always keep this at bottom of the file)
app.listen(PORT, function () {
    console.log("Server has started on port " + PORT);
});
