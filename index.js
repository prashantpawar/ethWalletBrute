const ethers = require('ethers');
const Wallet = ethers.Wallet;

//const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const charSet = '0123456789ABCDE'.split('');
const charSetLength = charSet.length;
const privateKeyHead = '0x31415926535897932384626433832795028841971693993751058209749'

// Create a wallet object
let wallet;

// Wallet address
if(charSet.length != 62) console.error("charSet is incomplete");

console.log(charSetLength * charSetLength * charSetLength * charSetLength * charSetLength);
//process.exit();

let privateKeyTail = '';
let privateKey = '';
for(var i = 0; i < charSet.length; i++) {
  for(var j = 0; j < charSet.length; j++) {
    for(var k = 0; k < charSet.length; k++) {
      for(var l = 0; l < charSet.length; l++) {
        for(var m = 0; m < charSet.length; m++) {
          privateKeyTail = charSet[i] + charSet[j] + charSet[k] + charSet[l] + charSet[m];
          privateKey = privateKeyHead + privateKeyTail
          // Create a wallet object
          wallet = new Wallet(privateKey)
          console.log(wallet.address);
        }
      }
    }
  }
}
