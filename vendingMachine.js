const INSERT_COIN_STATE = "INSERT COIN";
const NICKEL_WEIGHT = 5.0;
const NICKEL_AMOUNT = 0.05;
const DIME_AMOUNT = 0.10;

module.exports = function createVendingMachine() {
  let currentAmount = 0;
  return {
    receiveCoin: (weight) => {
      currentAmount += amountForWeight(weight);
    },
    output: () => currentAmount ? `\$${currentAmount.toFixed(2)}` : INSERT_COIN_STATE
  }
}

function amountForWeight(weight) {
  return weight === NICKEL_WEIGHT ? NICKEL_AMOUNT : DIME_AMOUNT;
}