const router = require('express').Router();
const { createPayment, listPaymentMethods } = require('../controllers/PaymentController')
const {verifyToken} = require('../middlewares/verifyToken');

router.post('/create', verifyToken, createPayment)
router.get('/list', verifyToken, listPaymentMethods)

module.exports = router;