const assert = require('assert')
const etherlib = require('../api/lib/etherlib')
 

describe("sendTransaction ", async ()=> {
    it("correct params must send 1 ether and get transactionHash", async () => {

      

        const address = '0x6A260aeae009B1a2D234C5795663c29522b41668'
        const hash = await etherlib.sendTransaction(address)

        assert.notEqual(hash, null);
    });
})
 
describe("isAddress ", ()=> {
    it("good address must be valid ", () => {
        const address = '0x6A260aeae009B1a2D234C5795663c29522b41668'
        assert.equal(etherlib.isAddress(address), true);
    });
    it("wrong address must be no valid ", () => {
        const address = '0x6A260aeae009B1a2D234C5795663c29522b416'
        assert.equal(etherlib.isAddress(address), false);
    });
})
