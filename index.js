const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const names = require('./routes/names');

const app = express();


// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/names', names);


app.get('/names', (req, res) => {
  res.render('index.ejs', { names });
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
