# Ethereum-gas Documentation

- npm install @cicciocoin/ethereum-gas
- create a .env file and set your ETH_RPC_PROVIDER 

CODE EXAMPLE : 

```Javascript
const gasPrice = require('@cicciocoin/ethereum-gas');

gasPrice().then((gasPriceEther) => {
  console.log('Gas price in ether:', gasPriceEther);
}).catch((error) => {
  console.error('Error:', error);
});