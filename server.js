const dotenv = require('dotenv');
dotenv.config();

const express = require("express");

const app = express();
const routes = require('./routes');

app.use('/', routes);

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('|| SERVER STARTED');
    console.log('|| Running on port:', port);
});