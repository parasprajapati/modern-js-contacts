const dotenv = require('dotenv');
dotenv.config();

const express = require("express");

const app = express();
const routes = require('./routes');
app.use('/api', routes);

let distDir = __dirname + "/dist";
app.use(express.static(distDir));

let server = app.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log('|| SERVER STARTED');
    console.log('|| Running on port:', port);
});