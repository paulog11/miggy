const express = require('express');
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(4000, function () {
  console.log('Miggy listening on port 4000!')
});
