const router = require('express').Router();
const { getUsers } = require('../controllers/UserController')
const {verifyToken} = require('../middlewares/verifyToken');

router.get('/get', verifyToken, getUsers)

module.exports = router;