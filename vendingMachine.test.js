it('should pass', function () {
    const vendingMachine = createVendingMachine();
    expect(vendingMachine.output()).toBe("INSERT COIN");
});

function createVendingMachine() {
    return {
        output: () => "INSERT COIN"
    }
}