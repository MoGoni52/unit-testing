const getLargest = require("./getLargest");

test("getLargest is a function", () => {
    expect(typeof getLargest).toBe("function");
})

test("getLargest return the largest value", () => {
    const result = getLargest(1, 2, 3);

    expect(result).toEqual(3);
})
