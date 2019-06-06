'use strict'

const express = require('express')
const bodyParser = require('body-parser')
//const productControl = require('../controllers/Productmethods')
const app = express()
const api = require('../routes/router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',api)


module.exports = app