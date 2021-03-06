const each = require('jest-each').default;

const {getLargest, getSmallest} = require("./numberFunctions");

describe("getLargest", () => {

    test("getLargest is a function", () => {
        expect(typeof getLargest).toBe("function");
    })
})

describe ("It handles normal inputs successfully", () => {
        
    each([
        [[1, 2, 3], 3],
        [[9, 8, 7], 9],
        [[12, 36, 19], 36]
    ]).test("%s -> %s", (arr, expected) => {
        expect(getLargest(...arr)).toEqual(expected);
    })  
})

describe ("It reports invalid inputs correctly", () => {

    test("It throws an error if one of the three inputs is undefined", () => {
        expect(() => {
            getLargest(1, 2)
        }).toThrow("Error: all inputs must have a value")
    })
})

describe ("getSmallest", () => {

    test("getSmallest is a function", () => {
        expect(typeof getSmallest).toBe("function");
    })
})


    describe ("It handles normal inputs successfully", () => {
        
        each([
            [[1, 2, 3], 1],
            [[9, 8, 7], 7],
            [[12, 36, 19], 12]
        ]).test("%s -> %s", (arr, expected) => {
            expect(getSmallest(...arr)).toEqual(expected);
        })  
    })

    describe("It reports invalid inputs correctly", () => {

        test("It throws an error if one of the three inputs is undefined", () => {
            expect(() => {
                getSmallest(1, 2)
            }).toThrow("Error: all inputs must have a value")
        })
    })
