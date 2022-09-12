var express = require('express');
var app = express()
const database = require('../lib/database')

app.get('/', function (req, res) {
  if(req.accepts('json')) {
    console.log('DEBUG: JSON request!!!');
    agency = req.header('Agency')
    res.json(database.faresFor(agency));
  }
});

module.exports.app = app;
