const transaction = require('./transaction')

module.exports = function (router) {
  router.use('/transactions', transaction)
}
