const Combinatorics = require('js-combinatorics');
const ethers = require('ethers');
const Wallet = ethers.Wallet;
const providers = require('ethers').providers;

const charSet = '0123456789ABCDE'.split('');
const base = 1;
baseN = Combinatorics.baseN(charSet, base);
const privateKeyHead = '0xb75aa7bffe2381dacfbb2306a013753099bdff5697f2987d90f9430a3ead3608'.substr(0,66-base);

let wallet;

const provider = new providers.JsonRpcProvider('http://localhost:8545');

function checkNonZeroBalances() {
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
}

function checkNonZeroTx() {
	let privateKey = '';
	baseN.lazyMap(privateKeyTail => {
	  privateKey = privateKeyHead + privateKeyTail.join('');
	  // Create a wallet object
	  wallet = new Wallet(privateKey, provider)
	  return wallet.getTransactionCount().then(txCount => {
	    console.log(privateKey, wallet.address, txCount);
	    if(txCount > 0) process.exit();
	    baseN.next();
	  });
	});

	//Start the process
	baseN.next();
}

checkNonZeroTx();
