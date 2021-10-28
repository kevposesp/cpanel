const { User } = require('../models/index')
const stripe = require('stripe')(process.env.STRIPEKEY);

const createProduct = async(req, res) => {
    
    try {

        // Search the user by id
        const user = await User.findOne({
            where: {
                id: req.id,
                typeUser: "admin"
            }
        })

        const product = await stripe.products.create({
            name: req.body.name,
            description: req.body.description
        })

        if(user){
            res.json({
                error: null,
                data: {
                    msg: "product_created_successfully",
                    product
                }
            })
        }
    } catch (err) {
        console.log(err)
    }

}

const createPrice = async(req, res) => {
    
    try {

        // Search the user by id
        const user = await User.findOne({
            where: {
                id: req.id,
                typeUser: "admin"
            }
        })

        const price = await stripe.prices.create({
            unit_amount: req.body.price,
            currency: 'eur',
            product: req.body.idProduct,
          })

        if(user){
            res.json({
                error: null,
                data: {
                    msg: "price_created_successfully",
                    price
                }
            })
        }
    } catch (err) {
        console.log(err)
    }

}

const getProducts = async(req, res) => {
    try {

        const products = await stripe.products.list({

        })

        res.json({
            error: null,
                data: {
                    msg: "price_list_created_successfully",
                    products
                }
        })

    } catch (err) {
        console.log(err)
    }

}

const getPrices = async(req, res) => {
    try {

        const prices = await stripe.prices.list({
            product: req.body.idProduct
          });

          console.log(req.body.idProduct)
        res.json({
            error: null,
                data: {
                    msg: "price_list_created_successfully",
                    prices
                }
        })

    } catch (err) {
        console.log(err)
    }

}

module.exports = {
    createProduct,
    createPrice,
    getProducts,
    getPrices
}