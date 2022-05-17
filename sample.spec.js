/* global describe, test expect, beforeAll */

import { strictEquals } from "./sample.js";

describe("Given the function strictEquals", () => {
    let expectedReturn;
    beforeAll(() => {
        expectedReturn = [false, true];
    });
    describe("When passing 1 and 1 as parameters", () => {
        test("Then it should return true", () => {
            // Arrange
            const param1 = 1;
            const param2 = 1;

            // Act
            const result = strictEquals(param1, param2);
            // Assert
            expect(result).toBe(expectedReturn[1]);
        });
    });

    describe("When passing NaN and NaN as parameters", () => {
        test("Then it should return false", () => {
            expect(strictEquals(NaN, NaN)).toBe(expectedReturn[0]);
        });
    });

    describe("When passing 0, -0 as params", () => {
        test("Then it should return true", () => {
            expect(strictEquals(0, -0)).toBe(expectedReturn[1]);
        });
    });

    describe("When passing -0, 0 as params", () => {
        test("Then it should return true", () => {
            const param1 = -0;
            const param2 = 0;

            const result = strictEquals(param1, param2);
            expect(result).toBe(expectedReturn[1]);
        });
    });

    describe('When passing 1. "1" as params', () => {
        test("Then it should return false", () => {
            const param1 = 1;
            const param2 = "1";

            const result = strictEquals(param1, param2);
            expect(result).toBe(expectedReturn[0]);
        });
    });

    describe("When passing true, false as params", () => {
        test("Then it should return false", () => {
            const param1 = true;
            const param2 = false;

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[0]);
        });
    });

    describe("When passing false, false as params", () => {
        test("Then it should return true", () => {
            const param1 = false;
            const param2 = false;

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[1]);
        });
    });

    describe('When passing "Water", "oil" as params', () => {
        test("Then it should return false", () => {
            const param1 = "Water";
            const param2 = "oil";

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[0]);
        });
    });

    describe('When passing "pepe", "pepe" as params', () => {
        test("Then it should return true", () => {
            const param1 = "pepe";
            const param2 = "pepe";

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[1]);
        });
    });

    describe('When passing "false", 0 as params', () => {
        test("Then it should return false", () => {
            const param1 = false;
            const param2 = 0;

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[0]);
        });
    });

    describe("When passing -0, -0 as params", () => {
        test("Then it should return true", () => {
            const param1 = -0;
            const param2 = -0;

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[1]);
        });
    });

    describe("When passing -0, 'pepe' as params", () => {
        test("Then it should return false", () => {
            const param1 = -0;
            const param2 = "pepe";

            const result = strictEquals(param1, param2);

            expect(result).toBe(expectedReturn[0]);
        });
    });
});
