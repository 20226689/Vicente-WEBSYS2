const customer = require('../models')

async function getCustomer(req, res){
    const { gender, age, createdFrom, createdTo, id, firstName, lastName, email } = req.query
    let results = customer
    
    if (gender) {
        results = results.filter (c => c.gender.toLowerCase() === gender.toLowerCase())
    }
    if (age) {
        results = results.filter (c => {
            const today = new Date()
            const birthday = new Date(c.birthday)
            let calculatedAge = today.getFullYear() - birthday.getFullYear()
            const month = today.getMonth() - birthday.getMonth()
            if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
                calculatedAge--
            }
            return calculatedAge === parseInt(age)
        })
    }
    if (createdFrom && createdTo) {
        results = results.filter (c => {
            const fromDate = new Date(createdFrom)
            const toDate = new Date(createdTo)
            const createdAt = new Date(c.createdAt)
            return fromDate <= createdAt && toDate >= createdAt
        })
    }
    //EXTRAS
    if (id) {
        results = results.filter(c => c.id === parseInt(id))
    }
    if (firstName) {
        results = results.filter(c => c.firstName.toLowerCase().includes(firstName.toLowerCase()))
    }
    if (lastName) {
        results = results.filter(c => c.lastName.toLowerCase().includes(lastName.toLowerCase()))
    }
    if (email) {
        results = results.filter(c => c.email.toLowerCase().includes(email.toLowerCase()))
    }
    res.send(results)
}

module.exports = { getCustomer }