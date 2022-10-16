import { swap } from '../utils';

export const insertionSort = (arr) => {
    const animations = [];

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            animations.push({
                type: 'SWAP',
                indexes: [j, j - 1]
            });
            swap(arr, j, j - 1);
            j--;
        }
    }

    return animations;
}