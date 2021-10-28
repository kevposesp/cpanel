const { Router } = require('express')
const router = Router()

const { home } = require('../controllers/IndexController')

router.get('/', home)

module.exports = router