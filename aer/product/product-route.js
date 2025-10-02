const express = require('express')
const router = express.Router()
const productController = require('./product-controller.js')

router.get('/', (req, res) => {
    productController.getProduct(req, res)
})

module.exports = router