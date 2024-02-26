const getEthereumGas = require('./ethereumGas');

getEthereumGas("https://ethereum-rpc.publicnode.com").then((gasPriceEther) => {
  console.log('Gas price in ether:', gasPriceEther);
}).catch((error) => {
  console.error('Error:', error);
});
