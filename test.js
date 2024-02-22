const getEthereumGas = require('./ethereumGas');

getEthereumGas().then((gasPriceEther) => {
  console.log('Gas price in ether:', gasPriceEther);
}).catch((error) => {
  console.error('Error:', error);
});
