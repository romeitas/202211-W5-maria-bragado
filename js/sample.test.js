import { add } from './sample.js';

describe('Given add function', () => {
    let value1;
    let value2;
    describe('When arguments are 2 and 5', () => {
        beforeEach(() => {
            value1 = 2;
            value2 = 5;
        });

        test('Then the result should be 7', () => {
            const expected = 7;
            const r = add(value1, value2);
            expect(r).toBe(expected);
        });
    });
    describe('When arguments are 2,5 and 5,5', () => {
        beforeEach(() => {
            value1 = 2.5;
            value2 = 5.5;
        });
        test('Then the result should be 8', () => {
            const expected = 8;
            const r = add(value1, value2);
            expect(r).toBe(expected);
        });
    });
});
