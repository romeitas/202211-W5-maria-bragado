import { calculateLength } from './array-methods.js';

try {
    let n = undefined;
    calculateLength(n);
} catch (error) {
    console.log(error.message);
}
