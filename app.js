
// No path necessary b/c module is built-in
const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();
// Socket IO
var socketio = require('socket.io');
// ...
var server = app.listen(3000);
var io = socketio.listen(server);
// morgan
app.use(morgan('combined'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

app.use('/', routes(io));
app.use(express.static('public')); // make all directories and files under public directory routable.

// app.get('/', (req, res) => {
//     //res.send('My Twitter app is connected!');
//     let context = {
//         title: 'An Example',
//         people: [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]
//     };

//     // nunjucks.render("index.html", context, (err, output) => {
//     //     res.send(output);
//     // });

//     res.render("index", context);
// })

// app.listen(3000, () => {
//     console.log("Example app is listening on port 3000")
// })
