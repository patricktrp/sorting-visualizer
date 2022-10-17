
import { colors } from "./constants";
import { swap } from '../utils';

export const bubbleSort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push({
                type: 'COLOR',
                indexes: [j, j + 1],
                color: colors.COMPARING
            });
            comparisons++;

            // swap
            if (arr[j] > arr[j + 1]) {
                swaps++;
                animations.push({
                    type: 'SWAP',
                    indexes: [j, j + 1]
                });
                swap(arr, j, j + 1);
                isAlreadySorted = false;
            }

            animations.push({
                type: 'COLOR_RESET_BY_INDEX',
                indexes: [j, j + 1]
            });
        }
        if (isAlreadySorted) break;
        animations.push({
            type: 'COLOR',
            indexes: [arr.length - i - 1],
            color: colors.INORDER
        });
    }
    return [animations, comparisons, swaps];
}