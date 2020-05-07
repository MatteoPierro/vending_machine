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

module.exports = function createVendingMachine(returnCoin, dispenseProduct, timer) {
  let currentAmount = 0;
  let productDispensed = false;
  return {
    dispenseProduct: (button) => {
      if (currentAmount === 1.0) {
        dispenseProduct(button);
        currentAmount = 0;
        productDispensed = true;
        timer(2000, () => {
          productDispensed = false;
        });
      }
    },
    receiveCoin: (weight) => {
      if (isValidCoin(weight)) {
        const coin = COINS.find((coin) => coin.weight === weight);
        currentAmount += coin.amount;
      } else {
        returnCoin();
      }
    },
    output: () => {
      if (currentAmount) {
        return formatAmount(currentAmount);
      }
      if (productDispensed) {
        return "THANK YOU";
      }
      return INSERT_COIN_STATE;
    }
  }
}

function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}

function isValidCoin(weight){
  const coin = COINS.find((coin) => coin.weight === weight);
  return Boolean(coin);
}