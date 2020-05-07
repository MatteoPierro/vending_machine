const INSERT_COIN_STATE = "INSERT COIN";
const NICKEL_WEIGHT = 5.0;
const NICKEL_AMOUNT = 0.05;
const DIME_AMOUNT = 0.10;
const QUARTER_WEIGHT = 5.7;
const QUARTER_AMOUNT = 0.25;
const DIME_WEIGHT = 2.3;

const QUARTER = {
  weight: QUARTER_WEIGHT,
  amount: QUARTER_AMOUNT
};
const NICKEL = {
  weight: NICKEL_WEIGHT,
  amount: NICKEL_AMOUNT
};
const DIME = {
  weight: DIME_WEIGHT,
  amount: DIME_AMOUNT
};

module.exports = function createVendingMachine(returnCoin) {
  let currentAmount = 0;
  return {
    receiveCoin: (weight) => currentAmount += amountForWeight(weight, returnCoin),
    output: () => currentAmount ? formatAmount(currentAmount) : INSERT_COIN_STATE
  }
}

function amountForWeight(weight, returnCoin) {
  if (weight === QUARTER.weight) return QUARTER.amount;
  if (weight === NICKEL.weight) return NICKEL.amount;
  if (weight === DIME.weight) return DIME.amount;
  returnCoin();
}

function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}