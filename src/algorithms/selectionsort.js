import { types } from '../animations';
import colors from '../colors';
import { swap } from '../utils';

export const selectionsort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIdx = i;
        animations.push({
            type: types.COLOR,
            indexes: [i],
            color: colors.yellow
        })
        for (let j = i + 1; j < arr.length; j++) {
            animations.push({
                type: types.COLOR,
                indexes: [j],
                color: colors.primaryColorShade
            })
            animations.push({
                type: types.COLOR_RESET_BY_INDEX,
                indexes: [j]
            })
            comparisons++;
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j;

            }
        }
        swaps++;
        if (i !== smallestIdx) {
            swap(arr, i, smallestIdx);
            animations.push({
                type: types.COLOR,
                indexes: [i, smallestIdx],
                color: colors.red
            })
            animations.push({
                type: types.SWAP,
                indexes: [i, smallestIdx]
            })
        }

        animations.push({
            type: types.COLOR_RESET_BY_INDEX,
            indexes: [smallestIdx]
        })

        animations.push({
            type: types.COLOR,
            indexes: [i],
            color: colors.inorder
        })
    }

    return [animations, comparisons, swaps];;
}