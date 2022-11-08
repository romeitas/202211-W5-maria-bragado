export const calculateLength = (array) => {
    if (array === undefined) throw new RangeError('Parámetro no incluido');
    let counter = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        counter++;
    }
    return counter++;
};
