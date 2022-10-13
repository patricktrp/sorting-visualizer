const createArrayBySize = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const shuffleArray = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export const createRandomArrayBySize = (size) => {
    const array = createArrayBySize(size);
    shuffleArray(array);
    return array;
}

