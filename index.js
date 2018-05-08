const ethers = require('ethers');
const Wallet = ethers.Wallet;
const providers = require('ethers').providers;

//const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const charSet = '0123456789ABCDE'.split('');
const charSetLength = 1; //charSet.length;
const privateKeyHead = '0x31415926535897932384626433832795028841971693993751058209749'

// Create a wallet object
let wallet;

// Wallet address

console.log(charSetLength * charSetLength * charSetLength * charSetLength * charSetLength);

const provider = providers.getDefaultProvider()
console.log(provider);

//process.exit();

let privateKeyTail = '';
let privateKey = '';
for(var i = 0; i < charSetLength; i++) {
  for(var j = 0; j < charSetLength; j++) {
    for(var k = 0; k < charSetLength; k++) {
      for(var l = 0; l < charSetLength; l++) {
        for(var m = 0; m < charSetLength; m++) {
          privateKeyTail = charSet[i] + charSet[j] + charSet[k] + charSet[l] + charSet[m];
          privateKey = privateKeyHead + privateKeyTail
          // Create a wallet object
          wallet = new Wallet(privateKey, provider)
          wallet.getBalance().then(bal => {
            console.log(wallet.address, bal);
            process.exit();
          });
        }
      }
    }
  }
}
