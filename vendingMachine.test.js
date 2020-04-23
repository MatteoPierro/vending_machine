const createVendingMachine = require('./vendingMachine');

it('display insert coin when no coins are inserted', function () {
    const vendingMachine = createVendingMachine();
    expect(vendingMachine.output()).toBe("INSERT COIN");
});