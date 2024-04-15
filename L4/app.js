const express = require('express')
const app = express()
let { people } = require('./data')
const authRouter = require('./router/auth')
const peopleRouter = require('./router/people')
// static assets
// app.use(express.static('./method_public'))
// // parse form data
// app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/login',authRouter)

app.use('/api/people',peopleRouter)

app.listen(3000, () => {
  console.log('Server is listening on port 5000....')
})
