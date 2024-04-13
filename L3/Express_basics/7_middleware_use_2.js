const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize])
// app.use([authorize,logger])

// http://localhost:5000/?user=john

app.get('/', (req, res) => {
    console.log(req.user)
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})