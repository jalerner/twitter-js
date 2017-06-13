
module.exports = function(io) {

  const express = require('express');
  const router = express.Router();
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');

  // Body parser
  const bodyParser = require('body-parser')
  var jsonParser = bodyParser.json()
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true } );
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    // Pass object into index template
    res.render( 'index', { tweets: list, showForm: true, showName: true } );
  });

  router.get('/tweets/:id', function(req, res) {
    var tweetID = new Number(req.params.id);
    var list = tweetBank.find( {id: tweetID} );
    // Pass object into index template
    res.render( 'index', { tweets: list } );
  });

  router.post('/tweets', urlencodedParser, function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    io.sockets.emit('newTweet', { name: name, text: text });
    res.redirect('/');
  });

  // router.get('/stylesheets/:fileName', function (req, res) {
  //     res.sendFile("C:/Users/me/Documents/Courses/FullstackAcademy/Workshops/twitter-js/public/stylesheets/"+ req.params.fileName);
  // });

  // module.exports = router;

  return router;
};