const router = require('express').Router();
const { createProduct, createPrice, getProducts, getPrices } = require('../controllers/ProductController')
const {verifyToken} = require('../middlewares/verifyToken');

router.post('/create', verifyToken, createProduct)
router.post('/create-price', verifyToken, createPrice)
router.get('/products-all', verifyToken, getProducts)
router.post('/prices-all', verifyToken, getPrices)

module.exports = router;