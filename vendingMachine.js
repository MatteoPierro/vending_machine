const INSERT_COIN_STATE = "INSERT COIN"

module.exports = function createVendingMachine() {
  let currentAmount;
  return {
    receiveCoin: (weight) => {
      currentAmount = weight === 5.0 ? 0.05 : 0.10;
    },
    output: () => currentAmount ? `\$${currentAmount.toFixed(2)}` : INSERT_COIN_STATE
  }
}