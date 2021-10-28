const { User } = require('../models/index')
const stripe = require('stripe')(process.env.STRIPEKEY);

const createPayment = async(req, res) => {
    const {number, exp_month, exp_year, cvc} = req.body
    try {

        // Search the user by id
        const user = await User.findOne({
            where: {
                id: req.id
            }
        })

        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
              number,
              exp_month,
              exp_year,
              cvc
            },
        })
        
        const paymentMethodAttach = await stripe.paymentMethods.attach(
            paymentMethod.id,
            {
                customer: user.idStripe
            }
        )
        res.json({
            error: null,
            data: {
                msg: "El metodo de pago se creó correctamente"
            }
        })
    } catch (err) {
        console.log(err)
    }

}

const listPaymentMethods = async(req, res) => {
    try {

        // Search the user by id
        const user = await User.findOne({
            where: {
                id: req.id
            }
        })

        const paymentMethods = await stripe.customers.listPaymentMethods(
            user.idStripe,
            {type: 'card'}
          );
        res.json({
            data: paymentMethods
        })
    } catch (err) {
        console.log(err)
    }

}


module.exports = {
    createPayment,
    listPaymentMethods
}