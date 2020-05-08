const createVendingMachine = require('./vending-machine');

const NICKEL_WEIGHT = 5.0;
const DIME_WEIGHT = 2.3;
const QUARTER_WEIGHT = 5.7;
const PENNY_WEIGHT = 3.11

let vendingMachine;
let returnCoin;
let dispenseProduct;
let timer;
let timerCallback;

function flushTimer() {
    timerCallback.forEach((c) => c());
}

beforeEach(() => {
    returnCoin = jest.fn();
    dispenseProduct = jest.fn();
    timerCallback = [];
    timer = jest.fn((time, callback) => {
        timerCallback.push(callback);
    });
    vendingMachine = createVendingMachine(returnCoin, dispenseProduct, timer);
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

it('does not dispense the first product if no money is inserted', () => {
    vendingMachine.dispenseProduct(1);

    expect(dispenseProduct).not.toHaveBeenCalled();
});

it('dispenses the first product only once when 1$ is inserted', () => {
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);

    vendingMachine.dispenseProduct(1);
    vendingMachine.dispenseProduct(1);

    expect(dispenseProduct).toHaveBeenCalledTimes(1);
    expect(dispenseProduct).toHaveBeenCalledWith(1);
});

it('displays thank you message after product has been dispensed', () => {
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);

    vendingMachine.dispenseProduct(1);

    expect(vendingMachine.output()).toBe("THANK YOU");
});

it('displays insert coin messsage after thank you message', () => {
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);
    vendingMachine.receiveCoin(QUARTER_WEIGHT);

    vendingMachine.dispenseProduct(1);

    expect(vendingMachine.output()).toBe("THANK YOU");
    flushTimer();
    expect(vendingMachine.output()).toBe("INSERT COIN");
});
