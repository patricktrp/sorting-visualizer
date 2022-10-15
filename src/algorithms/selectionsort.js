import { swap } from '../utils';

export const selectionsort = (arr) => {
    const animations = [];

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
        swap(arr, i, smallestIdx);
    }

    return animations;
}



// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             animations.push({
//                 type: 'SWAP',
//                 indexes: [j, j + 1]
//             });
//             let tmp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = tmp;
//         }
//         animations.push({
//             type: 'COLOR_RESET'
//         });
//     }
// }