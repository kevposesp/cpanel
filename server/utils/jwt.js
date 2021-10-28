const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const sign = (usr) => {
    
    return jwt.sign({ id: usr.id, typeUser: usr.typeUser }, authConfig.secret, {
        expiresIn: authConfig.expires
    })

}

const decode = (token) => {
    return jwt.verify(token, authConfig.secret)
}

module.exports = {
    sign,
    decode
}