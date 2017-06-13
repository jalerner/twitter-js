const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets } );
});

// router.get('/stylesheets/:fileName', function (req, res) {
//     res.sendFile("C:/Users/me/Documents/Courses/FullstackAcademy/Workshops/twitter-js/public/stylesheets/"+ req.params.fileName);
// });

module.exports = router;