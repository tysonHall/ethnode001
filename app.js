const express = require('express');
const {ethers} = require('ethers');

const app = express();

/**
 * privatekey
 * to_address
 * amount
 * chain_id
 */
app.get('/t', async (req, res) => {
    console.log(req.query);
    if(req.query.privatekey == undefined || req.query.to_address == undefined || req.query.amount == undefined || req.query.chain_id == undefined) {
        res.send("参数错误");
        return;
    }
    let privatekey = req.query.privatekey;
    let wallet = new ethers.Wallet(privatekey);

    console.log("address:", wallet.address);

    let transaction = {
        to:req.query.to_address,
        value: ethers.parseEther(req.query.amount+''), // 0.001 ether
        gasLimit: 21000,
        maxPriorityFeePerGas: ethers.parseUnits('5', 'gwei'),
        maxFeePerGas: ethers.parseUnits('20', 'gwei'),
        nonce: 1,
        type: 2,
        chainId:req.query.chain_id
    };
    let rawTransasction = await wallet.signTransaction(transaction);

    res.send('rawTransasction ' + rawTransasction);
});

const server = app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});