const {ethers} = require('ethers');
// const fetch = require('node-fetch');

async function main() {
    let privatekey = "36d86d96bfb118cf55a14e8a5c31aca5ca89e5fa1ca8bc21c48ced6d1628e27d";
    let wallet = new ethers.Wallet(privatekey);

    console.log("address:", wallet.address);

    let transaction = {
        to:'0x4C925ACb7C2487d71C2973E6922810469a076407',
        value: ethers.parseEther('0.00001'), // 0.001 ether
        gasLimit: 21000,
        maxPriorityFeePerGas: ethers.parseUnits('5', 'gwei'),
        maxFeePerGas: ethers.parseUnits('20', 'gwei'),
        nonce: 1,
        type: 2,
        chainId:1
    };
    let rawTransasction = await wallet.signTransaction(transaction);

    console.log("rawTransasction:", rawTransasction);

    // let gethProxy = await fetch("https://api-ropsten.etherscan.io/api/")
}

main();