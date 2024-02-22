# Ethereum-gas Documentation

- npm install ethereum-gas-price
- node test.js

```Javascript
const getEthereumGas = require('./ethereumGas');

getEthereumGas().then((gasPriceEther) => {
  console.log('Gas price in ether:', gasPriceEther);
}).catch((error) => {
  console.error('Error:', error);
});