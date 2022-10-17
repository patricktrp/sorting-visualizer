import { swap } from '../utils';

export const selectionsort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            animations.push({
                type: 'COLOR',
                indexes: [i, j],
                color: 'cyan'
            });
            animations.push({
                type: 'COLOR_RESET_BY_INDEX',
                indexes: [j]
            })
            comparisons++;
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j;
            }
        }
        animations.push({
            type: 'SWAP',
            indexes: [i, smallestIdx]
        });
        animations.push({
            type: 'COLOR',
            indexes: [i],
            color: '#138D75'
        });
        swaps++;
        swap(arr, i, smallestIdx);
    }

    return [animations, comparisons, swaps];;
}