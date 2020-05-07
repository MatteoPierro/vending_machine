const createVendingMachine = require('./vendingMachine');

const NICKEL_WEIGHT = 5.0;
const DIME_WEIGHT = 2.3;
const QUARTER_WEIGHT = 5.7;
const PENNY_WEIGHT = 3.11

let vendingMachine;
let returnCoin;
let dispenseProduct;

beforeEach(() => {
    returnCoin = jest.fn();
    dispenseProduct = jest.fn();
    vendingMachine = createVendingMachine(returnCoin, dispenseProduct);
});

it('display insert coin when no coins are inserted', () => {
    expect(vendingMachine.output()).toBe("INSERT COIN");
});

it('displays the amount for a nickel', () => {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.05");
});

it('displays the amount for a dime', () => {
    vendingMachine.receiveCoin(DIME_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.10");
});

it('displays the amount for two nickels', () => {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.10");
});

it('displays the amount for one quarter', () => {
    vendingMachine.receiveCoin(QUARTER_WEIGHT);

    expect(vendingMachine.output()).toBe("$0.25");
});

it('returns the penny to the user', () => {
    vendingMachine.receiveCoin(PENNY_WEIGHT);

    expect(vendingMachine.output()).toBe("INSERT COIN");
    expect(returnCoin).toHaveBeenCalled();
});

it('does not reject a valid coin', () => {
    vendingMachine.receiveCoin(NICKEL_WEIGHT);

    expect(returnCoin).not.toHaveBeenCalled();
});

it('dispenses the first product if 1$ is inserted', () => {
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);

    vendingMachine.dispenseProduct(1);

    expect(dispenseProduct).toHaveBeenCalledTimes(1);
    expect(dispenseProduct).toHaveBeenCalledWith(1);
});