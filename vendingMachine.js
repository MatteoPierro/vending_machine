const INSERT_COIN_STATE = "INSERT COIN"

module.exports = function createVendingMachine() {
  let hasCoin = false;
  let currentAmount;
  return {
    receiveCoin: (weight) => {
      currentAmount = weight === 5.0 ? "0.05" : "0.10";
      hasCoin = true
    },
    output: () => currentAmount ? `\$${currentAmount}` : INSERT_COIN_STATE
  }
}