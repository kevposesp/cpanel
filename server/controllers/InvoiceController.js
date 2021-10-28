const { User } = require('../models/index')
const stripe = require('stripe')(process.env.STRIPEKEY);

const createInvoice = async(req, res) => {
    
    try {

        // Search the user by id
        const user = await User.findOne({
            where: {
                id: req.id,
                typeUser: "admin"
            }
        })

        if(user){
            const userStripe = await User.findOne({
                attributes: ['idStripe'],
                where: {
                    id: req.body.idUser
                }
            })

            const invoice = await stripe.invoices.create({
                customer: userStripe.idStripe,
                auto_advance: true
            })

            const invoiceF = await stripe.invoices.finalizeInvoice(
                invoice.id
            )

            const invoiceP = await stripe.invoices.pay(
                invoice.id
            )

            res.json({
                error: null,
                data: {
                    msg: "Factura creada correctamente",
                    invoice
                }
            })
        }
    } catch (err) {
        console.log(err)
    }

}

const createInvoiceItem = async(req, res) => {
    
    try {

        // Search the user by id
        const user = await User.findOne({
            where: {
                id: req.id,
                typeUser: "admin"
            }
        })

        if(user){
            const userStripe = await User.findOne({
                attributes: ['idStripe'],
                where: {
                    id: req.body.idUser
                }
            })
            
            const invoiceItem = await stripe.invoiceItems.create({
                customer: userStripe.idStripe,
                price: req.body.price,
                description: req.body.product.name
              });

            res.json({
                error: null,
                data: {
                    msg: "Item creado correctamente",
                    invoiceItem
                }
            })
        }
    } catch (err) {
        console.log(err)
    }

}

const getPersonalInvoices = async(req, res) => {
    try{
        const user = await User.findOne({
            where: {
                id: req.id
            }
        })

        const invoices = await stripe.invoices.list({
            customer: user.id,
        })

        res.json({
            error: null,
            msg: "list_invoices_successfully",
            data: invoices
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    createInvoice,
    createInvoiceItem,
    getPersonalInvoices
}