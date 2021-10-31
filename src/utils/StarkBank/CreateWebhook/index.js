require('dotenv').config();

const starkbank = require('starkbank');
const {starkbankConfig} = require('../../../config/starkbankConfig');


const user = new starkbank.Project({
  environment: starkbankConfig.environment,
  id: starkbankConfig.project_id,
  privateKey: starkbankConfig.privateKey,
});

starkbank.user = user;


(async () => {
  let webhook = await starkbank.webhook.create({

    url: process.env.WEBHOOK_URL,
    subscriptions: ['transfer', 'invoice'],
  });

  console.log(webhook);
})();
