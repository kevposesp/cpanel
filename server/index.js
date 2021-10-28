const express = require('express');
require('dotenv').config()

const app = express();

//Stripe
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPEKEY)
stripe.setMaxNetworkRetries(2);

// cors
const cors = require('cors');
const corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// capturar body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(require('./routes/index')) // Home

// Routes auth
const authRoutes = require('./routes/auth')
app.use('/auth/', authRoutes)

// Routes payment
const paymentRoutes = require('./routes/payment')
app.use('/payment/', paymentRoutes)

// Routes invoice
const invoiceRoutes = require('./routes/invoice')
app.use('/invoice/', invoiceRoutes)

// Routes user
const userRoutes = require('./routes/user')
app.use('/user/', userRoutes)

// Routes product
const productRoutes = require('./routes/product')
app.use('/product/', productRoutes)

// iniciar server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`servidor funcionando en: ${PORT}`)
})
