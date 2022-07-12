const fizzbuzz = require("./fizzbuzz");
const {multiple3or5} = require("./fizzbuzz");

describe("multipleof3or5", () => {

    test("multipleof3or5 is a function", () => {
        expect(typeof multiple3or5).toBe("function");
    })
})

describe("It handles normal inputs correctly", () => {

    test("Does it return fizzbuzz when multiple of 3 and 5", () => {
        expect(multiple3or5(15)).toBe("fizzBuzz"),
        expect(multiple3or5(30)).toBe("fizzBuzz");
        expect(multiple3or5(45)).toBe("fizzBuzz");
    })

    test("Does it return fizz when multiple of 3 only", () => {
        expect(multiple3or5(3)).toBe("fizz"),
        expect(multiple3or5(6)).toBe("fizz");
        expect(multiple3or5(9)).toBe("fizz");

    })

    test("Does it return buzz when multiple of 5 only", () => {
        expect(multiple3or5(5)).toBe("buzz"),
        expect(multiple3or5(10)).toBe("buzz");
        expect(multiple3or5(20)).toBe("buzz");

    })

    test("Does it return a number when number is not a multiple of 3 or 5", () => {
        expect(multiple3or5(4)).toBe(4),
        expect(multiple3or5(7)).toBe(7);
        expect(multiple3or5(11)).toBe(11);

    })    

})
