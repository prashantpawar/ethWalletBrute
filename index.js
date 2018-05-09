const Combinatorics = require('js-combinatorics');
const ethers = require('ethers');
const Wallet = ethers.Wallet;
const providers = require('ethers').providers;

const charSet = '0123456789ABCDE'.split('');
const base = 5;
baseN = Combinatorics.baseN(charSet, base);
const privateKeyHead = '0xf7fc05423d62add4883b40af6f18522053c51e66717f5b79384bf41c73ce2c31'.substr(0,66-base);

let wallet;

const provider = new providers.JsonRpcProvider('http://localhost:8545');

let privateKey = '';
baseN.lazyMap(privateKeyTail => {
  privateKey = privateKeyHead + privateKeyTail.join('');
  // Create a wallet object
  wallet = new Wallet(privateKey, provider)
  return wallet.getBalance().then(bal => {
    console.log(privateKey, wallet.address, bal.toString());
    if(bal.toString() != '0') process.exit();
    baseN.next();
  });
});

//Start the process
baseN.next();
