# Ethereum-gas Documentation

- npm install @cicciocoin/ethereum-gas

CODE EXAMPLE : 

```Javascript
const gasPrice = require('@cicciocoin/ethereum-gas');

gasPrice("YOUR_RPC_URL").then((gasPriceEther) => {
  console.log('Gas price in ether:', gasPriceEther);
}).catch((error) => {
  console.error('Error:', error);
});