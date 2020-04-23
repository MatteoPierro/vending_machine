const INSERT_COIN_STATE = "INSERT COIN"

module.exports = function createVendingMachine() {
  let hasCoin = false;
  return {
    receiveCoin: () => { hasCoin = true },
    output: () => hasCoin ? "$0.05" : INSERT_COIN_STATE
  }
}