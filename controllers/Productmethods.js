const products = require('../models/products')

function getProduct(req,res){
    let productId = req.params.productId

    products.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `cannot get item` })
        if (!products) return res.status(404).send({ message: `the product does not exist` })

        res.status(200).send({ product })
    })
}

function getProducts(req,res){
    products.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `cannot get items` })
        if (!products) return res.status(404).send({ message: `the product does not exist` })
        res.status(200).send({ products })
    })
}

function saveProduct(req,res){
    console.log('POST /api/product')
    console.log(req.body)

    let product = new products()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) {
            res.status(500).send({ message: `Error to save the database: ${err}` })
        } else {
            res.status(200).send({ message: productStored })
        }
    })
}

function updateProduct(req,res) {
    let productId = req.params.productId
    let update = req.body
    products.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) return res.status(500).send({ message: `cannot update this product ${err}` })
        res.status(200).send({ products: productUpdated })
    })
}

function deleteProduct(req,res) {
    let productId = req.params.productId
    products.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `cannot delete this item: ${err}` })
        product.remove(err => {
            if (err) return res.status(500).send({ message: `cannot delete this item: ${err}` })
            res.status(200).send({ message: `the product has been deleted` })
        })
    })
}

module.exports ={
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}