const express = require('express')
const router = express.Router()
const customerController = require('./customer-controller.js')

router.get('/', customerController.getCustomer)

module.exports = router