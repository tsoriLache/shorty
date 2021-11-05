const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require("cors");
const api = require('./routers/api')
const redirect = require('./routers/redirect');
const errorHandler = require('./errorHandler');

app.use(cors());
app.use(express.json());

app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir
app.get('/', function(req, res) { // serve main path as static file
  res.sendFile(path.resolve('./dist/index.html'))
});

app.use('/api/',api);
app.use('/s/',redirect);
app.use(errorHandler)

// start the server
app.listen(port, function() {
  console.log('app started');
});