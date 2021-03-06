const { decode } = require('../utils/jwt');
const { User } = require('../models');

const verifyToken = async(req, res, next) => {

    //Check for Authorization header
    const authHeader = req.header('Authorization') ? req.header('Authorization').split(' ') : null;

    if (!authHeader) {
        return res.status(422).json({
            errors: { body: ['Authorization failed', 'No Authorization header'] }
        });
    }

    //Check if authorization type is token
    if (authHeader[0] !== 'Token')
        return res.status(401).json({
            errors: { body: ['Authorization failed', 'Token missing'] }
        });

    //Check if token is valid
    const token = authHeader[1];
    try {
        const user = decode(token);

        if (!user) {
            throw new Error('No user found in token');
        }

        const this_user = await User.findOne({
            where: {
                id: user.id
            }
        })

        if (!this_user) {
            throw new Error("Invalid User");
        }

        req.id = this_user.id;
        return next();
    } catch (e) {
        return res.status(401).json({
            errors: { body: ['Authorization failed', e.message] }
        })
    }

}

module.exports = {verifyToken} 
