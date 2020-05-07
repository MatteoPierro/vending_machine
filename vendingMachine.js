const INSERT_COIN_STATE = "INSERT COIN";

const QUARTER = {
  weight: 5.7,
  amount: 0.25
};
const NICKEL = {
  weight: 5.0,
  amount: 0.05
};
const DIME = {
  weight: 2.3,
  amount: 0.10
};

const COINS = [ QUARTER, NICKEL, DIME ];

module.exports = function createVendingMachine(returnCoin) {
  let currentAmount = 0;
  return {
    receiveCoin: (weight) => currentAmount += amountForWeight(weight, returnCoin),
    output: () => currentAmount ? formatAmount(currentAmount) : INSERT_COIN_STATE
  }
}

function amountForWeight(weight, returnCoin) {
  const coin = COINS.find((coin) => coin.weight === weight);
  if (coin) {
    return coin.amount;
  }
  returnCoin();
}

function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}