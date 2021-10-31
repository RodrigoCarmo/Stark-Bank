const starkbank = require('starkbank');

let privateKey; let publicKey;

function generateKey() {
  [privateKey, publicKey] = starkbank.key.create();

  console.log(privateKey);
  console.log(publicKey);
}


generateKey();

module.exports = {
  generateKey,
};
