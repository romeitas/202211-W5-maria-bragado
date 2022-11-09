//Función Length
export const calculateLength = (array) => {
    let counter = 0;
    for (const i in array) {
        counter = Number(i) + 1;
    }
    return counter;
};

// Función Push

export const pushIt = (array, elementsToPush) => {
    let j = calculateLength(array);
    array[j] = elementsToPush;
    return array;
};

// Función Map
