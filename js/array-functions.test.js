import { calculateLength, pushIt } from './array-functions.js';

// Testing Length function
const cases = [
    [Infinity, 'hola', null, [1, 3], NaN, undefined],
    [false, {}],
];

describe('Given calculateLength function', () => {
    cases.forEach((item) => {
        test(`Then the result should be ${cases.length}`, () => {
            const expected = item.length;
            const result = calculateLength(item);
            expect(result).toBe(expected);
        });
    });
});

// Testing Push function

describe('Given pushIt function', () => {
    const array = [Infinity, 'hola', null, [1, 3], NaN, undefined];
    const elementsToPush = null;
    const expected = [Infinity, 'hola', null, [1, 3], NaN, undefined, null];
    test(`Then the array should be }`, () => {
        const result = pushIt(array, elementsToPush);
        expect(result).toStrictEqual(expected);
    });
});
