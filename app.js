
// No path necessary b/c module is built-in
const express = require('express');
const app = express();
const morgan = require('morgan')
const nunjucks = require('nunjucks');

// morgan
app.use(morgan('combined'));

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates


app.get('/', (req, res) => {
    //res.send('My Twitter app is connected!');
    let context = {
        title: 'An Example',
        people: [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]
    };

    // nunjucks.render("index.html", context, (err, output) => {
    //     res.send(output);
    // });

    res.render("index", context);
})

app.get('/news', (req, res) => {
    res.send('No news today, sorry!')
})

app.listen(3000, () => {
    console.log("Example app is listening on port 3000")
})

// app.use(function (req, res, next) {
//     console.log("Request: ", req.headers)
//     console.log("Response: ", res.headers)
//     next();
// })

// app.use('/confirm-reach-url/', (req, res, next) => {
//     console.log("Yes, we did reach that url!")
//     next();
// })

// app.use('/', (req, res, next) => {
//     console.log("HERE IS THE STATUS: GET / ", res.statusCode)
//     next();
// })

