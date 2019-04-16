const Web3 = require('web3');
const net = require('net');
const {promisify} = require('util');

//const web3 = new Web3('geth.ipc', net, {});  
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

//  sends 1.00 eth
 async function sendTransaction(address) {

    const serverAdress = '0xa8E6cc1FA35aA471A7FcbBB51B798B36C817354D'
    const transaction = {
        from: serverAdress,
        to: address,
        value: '1000000000000000000'
    }

    return new Promise (function (resolve, reject) {
        web3.eth.sendTransaction(transaction, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
         }
      })
    })

}

exports.sendTransaction = sendTransaction


/**
 * isAdrress
 * check if is a valid address
 * @param {*} address
 * @returns boolean
 */
function isAddress(address) {    
    return web3.utils.isAddress(address)
}
exports.isAddress = isAddress


