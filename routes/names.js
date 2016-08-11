const express = require('express');
const router = express.Router();

const Student = {
  names: [],
  checkIns: []
};

router.get('/', function(req, res, next) {
  res.render('names.ejs', { Student });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  Student["names"].push(name);
  if (name in Student["names"]===name) {
    Student["names"].push(name);
  }
  else {
    Student.checkIns.push("1");
  }
  res.redirect('/names');
});




module.exports = router;
