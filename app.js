const express = require('express');
const app = express();
const port = 8080;
const cors = require("cors");
const shortRouter = require('./routers/api')
app.use(cors());

app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir
app.get('/', function(req, res) { // serve main path as static file
  res.sendFile(path.resolve('./dist/index.html'))
});

app.use('/api/',shortRouter);
app.use('/',);






// start the server
app.listen(port, function() {
  console.log('app started');
});