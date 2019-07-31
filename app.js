const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/monES', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// for serving express static files
app.use(express.static(path.join(__dirname, 'public'), {dotfiles: 'allow'}));
app.use(bodyParser.urlencoded({
    extended: true
}));// for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());// for parsing application/json

//cross domain
app.use(cors());

// routes =======================================================================
const routes = require('./routes');
app.use('/api', routes);

// listen (start app with node index.js) ======================================
// Starting server
const httpServer = http.createServer(app);

httpServer.listen(6565);
console.log("Server on port: " + 6565);

module.exports = app;

