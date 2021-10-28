const { User } = require('../models/index')
const stripe = require('stripe')(process.env.STRIPEKEY);

const getUsers = async(req, res) => {
    try {
        // Search the username
        const users = await User.findAll({
            attributes: ['id', 'userName'],
        })
        res.json({
            users
        })
    } catch (err) {
        console.log(err)
    }

}
module.exports = {
    getUsers
}