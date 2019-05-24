const sum = require("./sum");

test("adder", () => {
    expect(sum(2, 4)).toBe(6);
});