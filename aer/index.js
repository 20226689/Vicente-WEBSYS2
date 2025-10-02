const express = require('express')
const app = express()
app.use(express.json())

const customerRoutes = require('./customer/customer-route.js')
app.use('/customer', customerRoutes)
const orderRoutes = require('./order/order-route.js')
app.use('/order', orderRoutes)
const productRoutes = require('./product/product-route.js')
app.use('/product', productRoutes)


app.listen(3000, () => {
    console.log(`Server started http://localhost:3000`)
})
