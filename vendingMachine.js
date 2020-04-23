const INSERT_COIN_STATE = "INSERT COIN"
const NICKEL_WEIGHT = 5.0;
const NICKEL_AMOUNT = 0.05;
const DIME_AMOUNT = 0.10;

module.exports = function createVendingMachine() {
  let currentAmount;
  return {
    receiveCoin: (weight) => {
      currentAmount = weight === NICKEL_WEIGHT ? NICKEL_AMOUNT : DIME_AMOUNT;
    },
    output: () => currentAmount ? `\$${currentAmount.toFixed(2)}` : INSERT_COIN_STATE
  }
}