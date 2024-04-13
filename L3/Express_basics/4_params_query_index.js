const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})

// part 1
// app.get('/api/products/1', (req, res) => {

//     const singleProduct = products.find(
//       (product) => product.id === 1
//     )
//     if (!singleProduct) {
//       return res.status(404).send('Product Does Not Exist')
//     }
  
//     return res.json(singleProduct)
//   })

// part 2
// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req)
//   // console.log(req.params)
//   const { productID } = req.params

//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   )
//   if (!singleProduct) {
//     return res.status(404).send('Product Does Not Exist')
//   }

//   return res.json(singleProduct)
// })

// part 3
// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//   console.log(req.params)
//   res.send('hello world')
// })

// part 4
// localhost:5000/api/v1/query?name=Ankit&age=20
// app.get('/api/v1/query', (req, res) => {
//     console.log(req.query)
//     res.status(200).json(req.query)
// })
    

// part 5
// localhost:5000/api/v1/query?search=a&limit=1
// app.get('/api/v1/query', (req, res) => {
//   // console.log(req.query)
//   const { search, limit } = req.query
//   let sortedProducts = [...products]

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search)
//     })
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] })
//   }
//   res.status(200).json(sortedProducts)
// })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})