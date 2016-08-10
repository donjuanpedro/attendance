const express = require('express');
const router = express.Router();

const names = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

router.get('/', function(req, res, next) {
  res.render('names.ejs', { names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  names.push(name);
  res.redirect('/names');
});

module.exports = router;
