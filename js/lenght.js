export const arr1 = [4, NaN, [0, 1, 4], 'hola', null];

const calculateLenght = (arr1) => {
    let i = 0;

    while (arr1[i]) {
        if (i === NaN) {
            i === 1;
        }
        i++;
    }
    return i;
};

console.log(calculateLenght(arr1));
