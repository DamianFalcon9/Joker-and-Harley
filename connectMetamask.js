import Web3 from 'web3';

let web3;

async function connectMetamask() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      console.log('MetaMask connected.');
    } catch (error) {
      console.error('User denied account access.');
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    console.error('No Ethereum browser extension detected.');
  }
}

export { connectMetamask, web3 };
