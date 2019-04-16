const express = require('express')
const router = express.Router()
const transaction = require('../controllers/transaction')

router.route('/send').post(transaction.sendEther)

module.exports = router
