import colors from '../colors';
import { swap } from '../utils';
import { types } from '../animations';

export const insertionSort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        animations.push({
            type: types.COLOR_RESET_BY_INDEX,
            indexes: [i - 1]
        });
        animations.push({
            type: types.COLOR,
            indexes: [i],
            color: colors.inorder
        });

        comparisons++;
        while (j > 0 && arr[j] < arr[j - 1]) {
            animations.push({
                type: types.COLOR,
                indexes: [j, j - 1],
                color: colors.primaryColorShade
            });
            animations.push({
                type: types.COLOR,
                indexes: [j, j - 1],
                color: colors.red
            });
            comparisons++;
            swaps++;
            animations.push({
                type: types.SWAP,
                indexes: [j, j - 1]
            });
            // animations.push({
            //     type: types.COLOR_RESET
            // });

            // TODO implement COLOR_MULTIPLE_AT_SAME_TIME type
            if (j === i) {
                animations.push({
                    type: types.COLOR_RESET_BY_INDEX,
                    indexes: [j - 1]
                });
                animations.push({
                    type: types.COLOR,
                    color: colors.inorder,
                    indexes: [j]
                })
            } else {
                animations.push({
                    type: types.COLOR_RESET_BY_INDEX,
                    indexes: [j, j - 1]
                });
            }

            swap(arr, j, j - 1);
            j--;
        }
        animations.push({
            type: types.COLOR,
            indexes: [j],
            color: colors.green
        });
        animations.push({
            type: types.COLOR_RESET_BY_INDEX,
            indexes: [j]
        });
    }

    return [animations, comparisons, swaps];
}