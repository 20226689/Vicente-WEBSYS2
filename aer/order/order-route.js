const express = require('express')
const router = express.Router()
const orderController = require('./order-controller.js')

router.get('/', (req, res) => {
    orderController.getOrder(req, res)
})

module.exports = router