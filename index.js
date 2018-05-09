const ethers = require('ethers');
const Wallet = ethers.Wallet;
const providers = require('ethers').providers;

//const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const charSet = '0123456789ABCDE'.split('');
const charSetLength = 2; //charSet.length;
const privateKeyHead = '0xf7fc05423d62add4883b40af6f18522053c51e66717f5b79384bf41c73ce2c31'.substr(0,61);
//const privateKeyHead = '0xb5e5beb2307e15565b0539706e0c3b43d90fffc9543cd594ddab0aed3b129fd';


// Create a wallet object
let wallet;

// Wallet address

console.log(charSetLength * charSetLength * charSetLength * charSetLength * charSetLength);

//const provider = providers.getDefaultProvider()
const provider = new providers.JsonRpcProvider('http://localhost:8545');
/**
wallet = new Wallet('0xf7fc05423d62add4883b40af6f18522053c51e66717f5b79384bf41c73ce2c31', provider);
wallet.getBalance().then(bal => {
  console.log(wallet.address, bal.toString());
  //process.exit();
});
**/


let privateKeyTail = '';
let privateKey = '';
for(var i = 0; i < charSetLength; i++) {
  for(var j = 0; j < charSetLength; j++) {
    for(var k = 0; k < charSetLength; k++) {
      for(var l = 0; l < charSetLength; l++) {
        for(var m = 0; m < charSetLength; m++) {
          privateKeyTail = charSet[i] + charSet[j] + charSet[k] + charSet[l] + charSet[m];
          privateKey = privateKeyHead + privateKeyTail;
          // Create a wallet object
          wallet = new Wallet(privateKey, provider)
          wallet.getBalance().then(bal => {
            console.log(privateKey, wallet.address, bal.toString());
            //process.exit();
          });
        }
      }
    }
  }
}
