const createVendingMachine = require('./vendingMachine');

const NICKEL_WEIGHT = 5.0;
const DIME_WEIGHT = 2.3;
const QUARTER_WEIGHT = 5.7;
const PENNY_WEIGHT = 3.11

let vendingMachine;
let returnCoin;

beforeEach(() => {
    returnCoin = jest.fn();
    vendingMachine = createVendingMachine(returnCoin);
});

it('display insert coin when no coins are inserted', function () {
    expect(vendingMachine.output()).toBe("INSERT COIN");
});

it('displays the amount for a nickel', function () {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.05");
});

it('displays the amount for a dime', function () {
    vendingMachine.receiveCoin(DIME_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.10");
});

it('displays the amount for two nickels', function () {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.10");
});

it('displays the amount for one quarter', function () {
    vendingMachine.receiveCoin(QUARTER_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.25");
});

it('returns the penny to the user', function () {
    vendingMachine.receiveCoin(PENNY_WEIGHT);

    expect(vendingMachine.output()).toBe("INSERT COIN");
    expect(returnCoin).toHaveBeenCalled();
});

it('it does not reject a valid coin', function () {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(returnCoin).not.toHaveBeenCalled();
});