const starkbank = require('starkbank');
const {geradorNome} = require('gerador-nome');

const {starkbankConfig} = require('../../../config/starkbankConfig');


const user = new starkbank.Project({
  environment: starkbankConfig.environment,
  id: starkbankConfig.project_id,
  privateKey: starkbankConfig.privateKey,
});

starkbank.user = user;

async function invoiceGenerator() {
  let name = geradorNome();
  let amount = Math.floor(Math.random() * 400000);

  try {
    (async () => {
      const invoices = await starkbank.invoice.create([{
        amount: amount,
        due: '2021-12-15T16:27:37.585+00:00',
        taxId: '012.345.678-90',
        name: name,
        expiration: 790800,
        fine: 2.5,
        interest: 1.3,
        discounts: [
          {
            'percentage': 10,
            'due': '2021-12-15T16:27:37.585+00:00',
          },
        ],
        tags: ['War supply', 'Invoice #1234'],
        descriptions: [
          {
            'key': 'Fatura',
            'value': ' Cartão de crédito',
          },
        ],
      }]);

      (async () => {
        let transfers = await starkbank.transfer.create([
          {
            amount: amount,
            bankCode: '20018183',
            branchCode: '0001',
            accountNumber: '6341320293482496',
            taxId: '276.685.415-00',
            name: name,
          },
        ]);

        for (let transfer of transfers) {
          console.log(transfer);
        }
      })();

      for (const invoice of invoices) {
        console.log(invoice);
      }
    })();
  } catch (error) {
    throw new Error({message: error.message});
  }
}


module.exports = {invoiceGenerator};
