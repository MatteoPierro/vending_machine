const createVendingMachine = require('./vendingMachine');

const NICKEL_WEIGHT = 5.0;

it('display insert coin when no coins are inserted', function () {
    const vendingMachine = createVendingMachine();
    expect(vendingMachine.output()).toBe("INSERT COIN");
});

it('displays the amount for a nickel', function () {
    const vendingMachine = createVendingMachine();
    vendingMachine.receiveCoin(NICKEL_WEIGHT);
    expect(vendingMachine.output()).toBe("$0.05");
});