require('dotenv').config();

const starkbankConfig = {
  project_id: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY,
  environment: process.env.ENVIRONMENT,
  publicKey: process.env.PUBLIC_KEY,
};


module.exports = {starkbankConfig};
