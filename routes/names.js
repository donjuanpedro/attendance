const express = require('express');
const router = express.Router();

const Student = {
  names: [],
  checkIns: 0
};


router.get('/', function(req, res, next) {
  res.render('names.ejs', { Student });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  Student["names"].push(name);
  res.redirect('/names');
});




module.exports = router;
