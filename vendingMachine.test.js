const createVendingMachine = require('./vendingMachine');

it('display insert coin when no coins are inserted', function () {
    const vendingMachine = createVendingMachine();
    expect(vendingMachine.output()).toBe("INSERT COIN");
});

it('displays the amount for a nickel', function () {
    const vendingMachine = createVendingMachine();
    vendingMachine.receiveCoin(5.0);
    expect(vendingMachine.output()).toBe("$0.05");
});