
require('dotenv').config();
const { Web3 } = require('web3');
const web3 = new Web3(process.env.ETH_RPC_PROVIDER);

async function ethereumGas() {
  const gasPrice = await web3.eth.getGasPrice();
  const gasPriceEther = web3.utils.fromWei(gasPrice, "ether");
  return gasPriceEther;
}

module.exports = ethereumGas;


