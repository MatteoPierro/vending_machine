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

module.exports = function createVendingMachine(returnCoin, dispenseProduct) {
  let currentAmount = 0;
  return {
    dispenseProduct: (button) => {
      dispenseProduct(button);
    },
    receiveCoin: (weight) => {
      if (isValidCoin(weight)) {
        const coin = COINS.find((coin) => coin.weight === weight);
        currentAmount += coin.amount;
      } else {
        returnCoin();
      }
    },
    output: () => currentAmount ? formatAmount(currentAmount) : INSERT_COIN_STATE
  }
}

function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}

function isValidCoin(weight){
  const coin = COINS.find((coin) => coin.weight === weight);
  return Boolean(coin);
}