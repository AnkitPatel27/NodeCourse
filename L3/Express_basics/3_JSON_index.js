const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({ name: "john", age: 22 })
})

// part 2
// const { products } = require('./data')
// app.get('/', (req, res) => {
    //   res.json(products)
    // })
    
// part 3
// const { products } = require('./data')
// app.get('/', (req, res) => {
//     res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
//   })

//   app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product) => {
//       const { id, name, image } = product
//       return { id, name, image }
//     })
  
//     res.json(newProducts)
//   })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})