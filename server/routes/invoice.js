const router = require('express').Router();
const { createInvoice, createInvoiceItem, getPersonalInvoices } = require('../controllers/InvoiceController')
const {verifyToken} = require('../middlewares/verifyToken');

router.post('/create', verifyToken, createInvoice)
router.post('/create-item', verifyToken, createInvoiceItem)
router.get('/get-personal-invoices', verifyToken, getPersonalInvoices)

module.exports = router;