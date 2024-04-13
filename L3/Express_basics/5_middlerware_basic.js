const express = require('express')
const app = express()

//  req => middleware => res
// app.get('/', logger, (req, res) => {
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     res.send('Home')
// })
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Logger')
    next()
}

app.get('/', logger, (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})