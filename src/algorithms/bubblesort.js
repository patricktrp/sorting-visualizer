
import { types } from '../animations';
import colors from "../colors";
import { swap } from '../utils';

export const bubbleSort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push({
                type: types.COLOR,
                indexes: [j, j + 1],
                color: colors.primaryColorShade
            });
            comparisons++;

            // swap
            if (arr[j] > arr[j + 1]) {
                animations.push({
                    type: types.COLOR,
                    indexes: [j, j + 1],
                    color: colors.red
                });
                swaps++;
                animations.push({
                    type: types.SWAP,
                    indexes: [j, j + 1]
                });
                animations.push({
                    type: types.COLOR,
                    indexes: [j, j + 1],
                    color: colors.green
                });
                swap(arr, j, j + 1);
                isAlreadySorted = false;
            }

            animations.push({
                type: types.COLOR_RESET_BY_INDEX,
                indexes: [j, j + 1]
            });
        }
        if (isAlreadySorted) break;
        animations.push({
            type: types.COLOR,
            indexes: [arr.length - i - 1],
            color: colors.inorder
        });
    }
    return [animations, comparisons, swaps];
}