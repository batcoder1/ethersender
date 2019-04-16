const etherlib = require('../lib/etherlib');
const errorParams = [
  {code: 'R001', message: 'Bad request params' },
  {code: 'A001', message: 'Address format error' },

]

exports.sendEther = async (req, res) => {
  try {
    let { address } = req.body

    //param validations
    if (!address) throw errorParams[0]
    
    //address validations
    const isvalid =  etherlib.isAddress(address)
    if(!isvalid ) throw  errorParams[1]
    
    const transactionHash = await etherlib.sendTransaction(address)

    res.json({ transactionHash: transactionHash}) 

  } catch (error) {
    handler(error, res)
  }
}

/**
 * Handler
 * Error handler
 * @param {*} err
 * @param {*} res
 * @returns code: err
 */
function handler(err, res) {
    
  if (err) {
      if (err.message) {
          return res.status(500).send({
              code: err.code,
              message: err.message
          });
      } else {
          return res.status(500).send({
              code: err
          });
      }
  }

  return res.status(500).send({
      code: "500",
      message: "Internal Server error"
  });
}
