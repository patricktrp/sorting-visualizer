import { swap } from '../utils';

const partition = (items, left, right, animations) => {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            animations.push({
                type: 'SWAP',
                indexes: [i, j]
            });
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export const quickSort = (arr) => {
    const animations = [];
    quickSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

function quickSortHelper(items, left, right, animations) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortHelper(items, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortHelper(items, index, right, animations);
        }
    }
    return items;
}