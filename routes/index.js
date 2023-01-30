const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});


module.exports = router;
