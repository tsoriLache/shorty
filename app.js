const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const api = require('./routers/api')
const redirect = require('./routers/redirect')
app.use(cors());

// app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir
// app.get('/', function(req, res) { // serve main path as static file
//   res.sendFile(path.resolve('./dist/index.html'))
// });

app.use('/api/',api);
app.use('/s/',redirect);






// start the server
app.listen(port, function() {
  console.log('app started');
});