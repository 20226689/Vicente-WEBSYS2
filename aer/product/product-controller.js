const { create } = require('domain')
const product = require('./product.js')

function getProduct(req, res) {
    const { name, description, priceMin, priceMax, stockMin, stockMax, id, category } = req.query
    let results = product

    if (name) {
        results = results.filter (p => p.name.toLowerCase().includes(name.toLowerCase()))
    }
    if (description) {
        results = results.filter (p => p.description.toLowerCase().includes(description.toLowerCase()))
    }
    if (priceMin && priceMax) {
        results = results.filter (p => {
            return priceMin <= p.price && priceMax >= p.price
        })
    }
    if (stockMin && stockMax) {
        results = results.filter (p => {
            return stockMin <= p.stock && stockMax >= p.stock
        })
    }
    //EXTRAS
    if (id) {
        results = results.filter (p => p.id === parseInt(id))
    }
    if (category) {
        results = results.filter (p => p.category.toLowerCase().includes(category.toLowerCase()))
    }
    res.send(results)
}

module.exports = { getProduct }