const createVendingMachine = require('./vendingMachine');

const NICKEL_WEIGHT = 5.0;

let vendingMachine;

beforeEach(() => {
    vendingMachine = createVendingMachine();
});

it('display insert coin when no coins are inserted', function () {
    expect(vendingMachine.output()).toBe("INSERT COIN");
});

it('displays the amount for a nickel', function () {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.05");
});
