const { create } = require('domain')
const order = require('./order.js')

function getOrder(req, res) {
    const { status, totalMin, totalMax, id, date} = req.query
    let results = order

    if (status) {
        results = results.filter (o => o.status.toLowerCase().includes(status.toLowerCase()))
    }
    if (totalMin && totalMax) {
        results = results.filter (o => {
            return parseInt(totalMin) <= o.totalAmount && parseInt(totalMax) >= o.totalAmount
        })
    }
    //EXTRAS
    if (id) {
        results = results.filter (o => o.id === parseInt(id))
    }
    if (date) {
        results = results.filter (o => (new Date(o.date)) === (new Date(date)))
    }
    res.send(results)
}

module.exports = { getOrder }