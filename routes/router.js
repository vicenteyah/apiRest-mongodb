'use strict'

const express = require('express')
const productControl = require('../controllers/Productmethods')
const api = express.Router()

api.get('/product', productControl.getProducts)
api.get('/product/:productId', productControl.getProduct)
api.post('/product', productControl.saveProduct)
api.put('/product/:productId', productControl.updateProduct)
api.delete('/product/:productId', productControl.deleteProduct)

module.exports = api