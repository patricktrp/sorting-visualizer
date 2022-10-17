import { swap } from '../utils';

export const insertionSort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            comparisons++;
            animations.push({
                type: 'SWAP',
                indexes: [j, j - 1]
            });
            swaps++;
            swap(arr, j, j - 1);
            j--;
        }
    }

    return [animations, comparisons, swaps];
}