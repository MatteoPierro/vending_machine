const createVendingMachine = require('./vendingMachine');

it('should pass', function () {
    const vendingMachine = createVendingMachine();
    expect(vendingMachine.output()).toBe("INSERT COIN");
});