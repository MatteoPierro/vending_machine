const INSERT_COIN_STATE = "INSERT COIN"

module.exports = function createVendingMachine() {
  return {
    output: () => INSERT_COIN_STATE
  }
}