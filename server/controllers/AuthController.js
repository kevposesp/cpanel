const { User } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwt')
const stripe = require('stripe')(process.env.STRIPEKEY);

const signIn = async(req, res) => {
    // Signin
    const { userName, password } = req.body
    try {
        // Search the username
        const user = await User.findOne({
            where: {
                userName
            }
        })
        if (!user) { // Not found
            res.json({
                msg: "User not found"
            })
        } else { // Found user
            if (await bcrypt.compare(password, user.password)) { // Compare passwords
                // Create token
                const token = jwt.sign({ id: user.id, typeUser: user.typeUser })
                res.header('Authorization', "Token " + token).json({
                    error: null,
                    message: "Bienvenido",
                    data: { user, token }
                })
            } else { // Incorrect password
                res.json({
                    msg: "Incorrect password"
                })
            }
        }
    } catch (err) {
        console.log(err)
    }

}

const signUp = async(req, res) => {
    const { userName, firstName, lastName, email} = req.body
    if(req.body.password == req.body.passwordr){
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        try {

        const customer = await stripe.customers.create({
            email,
        });

        // Crete user
        const user = await User.create({
            userName,
            firstName,
            lastName,
            email,
            password,
            idStripe: customer.id,
            typeUser: "user"
        })
        res.json({
            error: null,
            msg: "Registered user",
            data: { user }
        })
        } catch (err) {
            console.log(err)
        }
    } else {
        res.json({
            error: true,
            msg: "passwords_not_equal"
        })
    }
}

module.exports = {
    signIn,
    signUp
}