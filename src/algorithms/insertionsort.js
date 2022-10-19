import colors from '../colors';
import { swap } from '../utils';

export const insertionSort = (arr) => {
    const animations = [];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        animations.push({
            type: 'COLOR',
            indexes: [j],
            color: 'cyan'
        })
        while (j > 0 && arr[j] < arr[j - 1]) {
            animations.push({
                type: 'COLOR',
                indexes: [j-1],
                color: colors.comparing
            });
            // animations.push({
            //     type: 'COLOR',
            //     indexes: [j, j - 1],
            //     color: colors.red
            // });
            comparisons++;

            animations.push({
                type: 'SWAP',
                indexes: [j, j - 1]
            });
            animations.push({
                type: 'COLOR',
                indexes: [j, j - 1],
                color: colors.green
            });
            animations.push({
                type: 'COLOR_RESET_BY_INDEX',
                indexes: [j, j-1]
            });
            swaps++;
            swap(arr, j, j - 1);
            j--;
        }
    }

    return [animations, comparisons, swaps];
}