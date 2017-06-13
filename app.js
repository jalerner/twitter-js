
// No path necessary b/c module is built-in
const express = require('express');
const app = express();
var morgan = require('morgan')

// morgan
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('My Twitter app is connected!')
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

