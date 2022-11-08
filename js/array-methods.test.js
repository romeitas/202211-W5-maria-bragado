import { calculateLength } from './array-methods.js';

const array = [Infinity, 'hola', null, [1, 3], NaN];
const errorCases = [undefined, RangeError];

describe('Given calculateLength function', () => {
    test.each(array)(
        'When arguments are Infinity, hola, null, [1, 3], NaN',
        () => {
            const expected = 5;
            const result = calculateLength(array);
            expect(result).toBe(expected);
        }
    );
    test('When argument is undefined lanza un error "Parámetro no incluido"', () => {
        const value = errorCases;
        const expected = RangeError;
        expect(() => {
            calculateLength(value);
        }).toThrowError(expected);
    });
});
